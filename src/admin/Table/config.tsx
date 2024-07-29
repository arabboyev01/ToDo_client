import { Popconfirm, Button, Checkbox } from "antd"
import { TasksDataType } from "../../types/types"
import { api } from "../../api/api";

export const taskColumn = (dataSource: any, handleDelete: (key: string) => void, setUpdated: (value: boolean) => void, updated: boolean, user?: string) => {
    const handleCheckboxChange = async (taskId: string, completed: boolean) => {
        api.updateResource('tasks', taskId, { completed }).then(() => setUpdated(!updated))
            .catch(err => console.log(err))
    };
    return [
        {
            title: 'Id',
            dataIndex: '_id',
            width: '20%',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            width: '20%',
            editable: true,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            width: '40%',
            editable: true,
        },
        !user ? {
            title: 'User Id',
            dataIndex: 'userId',
            width: '10%',
        } : {},
        {
            title: 'Completed',
            dataIndex: 'completed',
            width: '10%',
            render: (_: any, record: TasksDataType) => {
                return (
                    <Checkbox
                        checked={record.completed}
                        onChange={(e) => handleCheckboxChange(record._id, !record.completed)}
                    />
                )
            },
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            render: (_: any, record: TasksDataType) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
                        <Button danger>Delete</Button>
                    </Popconfirm>
                ) : null,
        },
    ]
}

export const taskTable = (columnTask: TasksDataType[] | any, handleSaveEdited: (e: TasksDataType) => void) => {
    return columnTask.map((col: { editable?: boolean, title: string, dataIndex: string }) => {
        if (!col?.editable) {
            return col
        }
        return {
            ...col,
            onCell: (record: TasksDataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSaveEdited
            }),
        };
    })
}

export const selectType = (data: any) => {
    if (data) {
        return data.data.data.map(({ email, _id }: { email: string, _id: string }) => {
            return {
                value: _id,
                label: email
            }
        })
    }
}