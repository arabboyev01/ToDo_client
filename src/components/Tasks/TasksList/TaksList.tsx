import { Button } from 'antd'
import { GetMethod } from '../../../api/getMethod'
import Layout from '../../../layout/Layout'
import * as S from './Tasks.style'
import CustomRouter from '../../../hooks/customRoute'
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd'
import { TaskboardItem, TaskboardItemStatus } from './TasklistTypes'
import { useSyncedState } from '../../../hooks/SharedHooks'
import { produce } from "immer"
import { FieldType } from '../../../types/types'
import TaskboardCol, { TaskboardColProps } from './TaskBoardColumn'
import { defaultItems } from './config/items'

type TaskboardData = Record<TaskboardItemStatus, TaskboardItem[]> | any

export default function TasksList() {

    const { navigate } = CustomRouter()
    const { data } = GetMethod<FieldType>('tasks')

    const [itemsByStatus, setItemsByStatus] = useSyncedState<TaskboardData>(
        'itemsByStatus',
        defaultItems
    )

    const handleDragEnd: DragDropContextProps['onDragEnd'] = ({ source, destination }) => {
        setItemsByStatus((current: any) => produce(current, (draft: any) => {
            if (!destination) {
                return
            }
            const [removed] = draft[source.droppableId as TaskboardItemStatus].splice(source.index, 1)
            draft[destination.droppableId as TaskboardItemStatus].splice(destination.index, 0, removed)
        }))
    }

    const handleDelete: TaskboardColProps['onDelete'] = ({ status, itemToDelete, }) =>
        setItemsByStatus((current: any) => produce(current, (draft: any) => {
            draft[status] = draft[status].filter((item: any) => item.id !== itemToDelete.id)
        })
        )


    console.log(data?.data?.data)
    return (
        <Layout>
            <S.TasksListStyle>
                <S.AddButton>
                    <Button type='primary' onClick={() => navigate('/tasks/new')}>Create New Task</Button>
                </S.AddButton>
            </S.TasksListStyle>
            <DragDropContext onDragEnd={handleDragEnd}>
                <S.TaskboardRoot>
                    <S.TaskboardContent>
                        {Object.values(TaskboardItemStatus).map((status) => {
                            console.log(status);
                            return (
                                <TaskboardCol
                                    key={status}
                                    status={status}
                                    items={itemsByStatus[status]}
                                    onDelete={handleDelete}
                                    onEdit={console.log}
                                />
                            );
                        })}
                    </S.TaskboardContent>
                </S.TaskboardRoot>
            </DragDropContext>
        </Layout>

    )
}