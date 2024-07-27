import { Button, Form, FormProps, Input } from "antd"
import Layout from "../../../layout/Layout"
import { FieldType } from "../../../types/types"
import { useState } from "react"
import CustomRouter from "../../../hooks/customRoute"
import { api } from "../../../api/api"
import { setToken } from "../../../lib/token"
import { InputStyle } from "../../User/style.user"
import useNotificationApi from "../../../hooks/alert"
import { Typography } from "antd"

const { Title } = Typography

export default function TaskNew(){

    const  { navigate } = CustomRouter()
    const { openNotification } = useNotificationApi()

    const [loading, setLoading] = useState(false)

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setLoading(true)
        api.createResource('tasks', values, {}).then(data => {
            if (data?.data?.success) {
                setToken('userToken', data?.data?.token, {})
                navigate('/')
                openNotification(data.data.message)
            }
        }).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }
    return(
        <Layout>
            <InputStyle>
                <Form
                    name="basic"
                    initialValues={{ role: "user" }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                    className='formData'
                >
                    <Title level={2}>Create a task</Title>
                    <Form.Item<FieldType>
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input your title!' }]}
            >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
            >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Create task
                        </Button>
                    </Form.Item>
                </Form>
            </InputStyle>
        </Layout>
    )
}