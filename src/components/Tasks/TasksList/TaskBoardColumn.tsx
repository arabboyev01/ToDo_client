import { Droppable, Draggable } from 'react-beautiful-dnd'
import { TaskboardItem, TaskboardItemStatus } from './TasklistTypes'
import TaskboardItemCard, { TaskboardItemCardProps } from  './TaskBoardItemCard'
import { DroppableRoot, TaskboardColRoot } from './Tasks.style'

export type TaskboardColProps = Pick<TaskboardItemCardProps,'onEdit' | 'onDelete'> & {
    items: TaskboardItem[]
    status: TaskboardItemStatus
}

function TaskboardCol({items, status, onEdit, onDelete}: TaskboardColProps) {
    return (
        <TaskboardColRoot title={`${status} (${items.length})`}>
            <Droppable droppableId={status}>
                {(provided, snapshot) => (
                    <DroppableRoot
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {items.map((item, index) => {
                            return (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            key={item.id}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <TaskboardItemCard
                                                item={item}
                                                status={status}
                                                isDragging={snapshot.isDragging}
                                                onEdit={onEdit}
                                                onDelete={onDelete}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </DroppableRoot>
                )}
            </Droppable>
        </TaskboardColRoot>
    )
}
export default TaskboardCol