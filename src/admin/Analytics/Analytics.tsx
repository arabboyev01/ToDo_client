import { GetMethod } from '../../api/getMethod'
import * as S from './style.analytics'
import { Typography } from "antd"
import { StatisticItem, StatisticsCard } from './style.analytics'
import { FieldType } from '../../types/types'
const { Title, Text } = Typography

export default function Analytics(){
    const { data } = GetMethod<FieldType>('tasks/analytics')
    return(
        <S.StyledAnalytics>
            <StatisticsCard>
                <Title level={4}>User Statistics</Title>
                <StatisticItem>
                    <Text strong>Email:</Text>
                    <Text>{data?.data?.data[0].email}</Text>
                </StatisticItem>
                <StatisticItem>
                    <Text strong>Total Tasks:</Text>
                    <Text>{data?.data?.data[0].totalTasks}</Text>
                </StatisticItem>
                <StatisticItem>
                    <Text strong>Completed Tasks:</Text>
                    <Text>{data?.data?.data[0].completedTasks}</Text>
                </StatisticItem>
                <StatisticItem>
                    <Text strong>Completion Rate:</Text>
                    <Text>{data?.data?.data[0].completionRate}%</Text>
                </StatisticItem>
                <StatisticItem>
                    <Text strong>User ID:</Text>
                    <Text>{data?.data?.data[0]._id}</Text>
                </StatisticItem>
            </StatisticsCard>
        </S.StyledAnalytics>
    )
}