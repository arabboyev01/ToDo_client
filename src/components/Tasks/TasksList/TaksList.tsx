import { Button, Table } from 'antd'
import { GetMethod } from '../../../api/getMethod'
import Layout from '../../../layout/Layout'
import * as S from './Tasks.style'
import CustomRouter from '../../../hooks/customRoute'
import { FieldType, TasksDataType } from '../../../types/types'
import EditableCell from '../../../admin/context/EditableCell'
import EditableRow from '../../../admin/context/EditableRow'
import { useState } from 'react'
import { api } from '../../../api/api'
import { taskColumn, taskTable } from '../../../admin/Table/config'


export default function TasksList() {

    const [updated, setUpdated] = useState(false)
    const { navigate } = CustomRouter()
    const { data } = GetMethod<FieldType>('tasks', undefined, updated)

    const handleDelete = (id: string) => {
        api.deleteResource('tasks', id).then(() => setUpdated(!updated))
            .catch(err => console.log(err))
    }


    const handleSaveEdited = (e: TasksDataType) => {
        api.updateResource('tasks', e._id, e).then(() => setUpdated(!updated))
            .catch(err => console.log(err))
    }

    const columnTask = taskColumn(data?.data?.data, handleDelete, setUpdated, updated, 'user')
    const columns = taskTable(columnTask, handleSaveEdited)

    return (
        <Layout>
            <S.TasksListStyle>
                <S.AddButton>
                    <Button type='primary' onClick={() => navigate('/tasks/new')}>Create New Task</Button>
                </S.AddButton>
            </S.TasksListStyle>
            <Table
                components={{
                    body: {
                        row: EditableRow,
                        cell: EditableCell,
                    },
                }}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={data?.data?.data}
                columns={columns}
            />
        </Layout>

    )
}
