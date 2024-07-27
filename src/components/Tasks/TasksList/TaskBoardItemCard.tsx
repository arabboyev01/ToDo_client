import { Button,Modal, Typography, Dropdown, Menu } from 'antd'
import { TaskboardItem, TaskboardItemStatus } from './TasklistTypes';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons'
import BaseTooltip from '../../../hooks/BaseTooltip'
import { DeleteMenuItem, StyledCard, TaskboardItemCardTitle } from './Tasks.style';

export interface TaskboardItemCardProps {
    item: TaskboardItem;
    isDragging: boolean;
    status: TaskboardItemStatus;
    onEdit: (itemToEdit: TaskboardItem) => void;
    onDelete: (args: {
        status: TaskboardItemStatus;
        itemToDelete: TaskboardItem;
    }) => void;
}

function TaskboardItemCard({item, status, isDragging, onEdit, onDelete }: TaskboardItemCardProps) {
    return (
        <StyledCard
            $isDragging={isDragging}
            size="small"
            title={
                <BaseTooltip overlay={item.title}>
                    <span>
                        <TaskboardItemCardTitle level={5} ellipsis={{ rows: 2 }}>
                            {item.title}
                        </TaskboardItemCardTitle>
                    </span>
                </BaseTooltip>
            }
            extra={
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item icon={<EditOutlined />} onClick={() => onEdit(item)}>
                                Edit
                            </Menu.Item>
                            <DeleteMenuItem
                                icon={<DeleteOutlined />}
                                onClick={() =>
                                    Modal.confirm({
                                        title: 'Delete?',
                                        content: `Are you sure to delete "${item.title}"?`,
                                        onOk: () =>
                                            onDelete({
                                                status,
                                                itemToDelete: item,
                                            }),
                                    })
                                }
                            >
                                Delete
                            </DeleteMenuItem>
                        </Menu>
                    }
                    trigger={['click']}
                >
                    <Button size="small" icon={<MoreOutlined />} />
                </Dropdown>
            }
        >
            <BaseTooltip overlay={item.description}>
                <Typography.Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                    {item.description}
                </Typography.Paragraph>
            </BaseTooltip>
        </StyledCard>
    )
}
export default TaskboardItemCard
