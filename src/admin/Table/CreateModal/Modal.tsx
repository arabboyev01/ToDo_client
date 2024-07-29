import React, { useState } from 'react'
import { Button, Form, Input, Modal, Typography } from 'antd'
import { FieldType, TasksDataType } from '../../../types/types'
import { GetMethod } from '../../../api/getMethod'
import { Select } from 'antd'
import { selectType } from '../config'

const { Title } = Typography

interface ModalProps {
    onFinish: (value: TasksDataType) => void
    open: boolean
    setOpen: (value: boolean) => void
}

const ModalComponent = ({ onFinish, open, setOpen }: ModalProps) => {

    const [loading, setLoading] = useState(false)

    const { data } = GetMethod('user/all')

    const handleCancel = () => {
        setOpen(false)
    }

    const onFinished = (values: TasksDataType) => {
        setLoading(true)
        onFinish(values)
        setLoading(false)
    }
    const options = selectType(data)

    return (
        <Modal title="Basic Modal" open={open} onCancel={handleCancel} footer={null}>
            <Form
                name="basic"
                initialValues={{ role: "user" }}
                onFinish={onFinished}
                autoComplete="off"
                layout="vertical"
                className='formData'
                style={{ width: '100%' }}
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
                <Form.Item<FieldType>
                    label="User"
                    name="userId"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Select
                        style={{ width: '100%' }}
                        onChange={console.log}
                        options={options}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Create task
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalComponent