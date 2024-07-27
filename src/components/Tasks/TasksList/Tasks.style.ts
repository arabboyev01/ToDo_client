import styled from "styled-components"
import { Card, Menu, Typography } from "antd"
import { colors } from "../../../hooks/ShareUtils"
import { red } from "@ant-design/colors"

interface DroppableRootProps {
  isDraggingOver: boolean;
}

export const TasksListStyle = styled.div``

export const AddButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
`

export const TaskboardRoot = styled.div`
  min-height: 0;
  height: 100%;
  min-width: 800px;
  max-width: 1400px;
  margin: auto;
`;
export const TaskboardContent = styled.div`
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
`;

export const TaskboardColRoot = styled(Card)`
  user-select: none;
  flex: 1;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 0;
  > .ant-card-body {
    overflow: hidden;
    height: 100%;
    padding: 0;
  }
`

export const DroppableRoot = styled.div<DroppableRootProps>`
  height: 100%;
  overflow-y: auto;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? colors.primary[2] : colors.primary[1]};
`

interface StyledCardProps {
  $isDragging: boolean
}

export const StyledCard = styled(Card)<StyledCardProps>`
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: ${({ $isDragging }) => ($isDragging ? "#fafafa" : "#fff")};
`

export const TaskboardItemCardTitle = styled(Typography.Title)`
  white-space: pre-wrap;
  margin-right: 0.25rem;
`

export const DeleteMenuItem = styled(Menu.Item)`
  color: ${red.primary};
`