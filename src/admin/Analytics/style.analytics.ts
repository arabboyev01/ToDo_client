import styled from "styled-components"
import { Card } from "antd"

export const StyledAnalytics = styled.div``

export const StatisticsCard = styled(Card)`
  max-width: 400px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StatisticItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;