import { Button, Form, FormProps, Input } from 'antd'
import { FieldType } from '../../types/types'
import { api } from '../../api/api'
import { useState } from 'react'
import { setToken } from '../../lib/token'
import CustomRouter from '../../hooks/customRoute'
import { InputStyle } from './style.user'
import { Typography } from "antd"

const { Title } = Typography

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const { navigate } = CustomRouter()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setLoading(true)
        api.createResource('tasks', values).then(data => {
            if (data?.data?.success) {
                setToken('userToken', data?.data?.token, {})
                navigate('/')
            }
        }).catch(err => console.log(err))
            .finally(() => setLoading(false))
    }

    return (

        <InputStyle top>
            <Form
                name="basic"
                initialValues={{ role: "user" }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
                className='formData'
            >
                <Title level={2}>Register</Title>
                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type='email' />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Role"
                    name="role"
                    rules={[{ required: true, message: 'Please define the user role!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </InputStyle>
    )
}