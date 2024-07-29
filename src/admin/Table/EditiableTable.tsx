import React, { useState } from 'react'
import { Button, Table } from 'antd'
import EditableRow from '../context/EditableRow'
import EditableCell from '../context/EditableCell'
import { FieldType, TasksDataType } from '../../types/types'
import { taskColumn, taskTable } from './config'
import { GetMethod } from '../../api/getMethod'
import { api } from '../../api/api'
import ModalComponent from './CreateModal/Modal'


const EditableTaskTable: React.FC = () => {
    const [updated, setUpdated] = useState(false)
    const [open, setOpen] = useState(false)

    const { data } = GetMethod<FieldType>('tasks/all', undefined, updated)

    const handleDelete = (id: string) => {
        api.deleteResource('tasks', id).then(() => setUpdated(!updated))
            .catch(err => console.log(err))
    }

    const handleAdd = (values: TasksDataType) => {
        api.createResource<FieldType | TasksDataType>('tasks', values).then((data) => {
            if(data.data){
                setUpdated(!updated)
                setOpen(false)
            }
        })
        .catch(err => console.log(err))
    }

    const handleSaveEdited = (e: TasksDataType) => {
        api.updateResource('tasks', e._id, e).then(() => setUpdated(!updated))
        .catch(err => console.log(err))
    }

    const columnTask = taskColumn(data?.data?.data, handleDelete, setUpdated, updated)
    const columns = taskTable(columnTask, handleSaveEdited)

    return (
        <div>
            <Button onClick={() => setOpen(true)} type="primary" style={{ marginBottom: 16 }}>
                Add a row
            </Button>
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
            <ModalComponent onFinish={handleAdd} open={open} setOpen={setOpen}/>
        </div>
    );
};

export default EditableTaskTable
