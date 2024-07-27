import styled from "styled-components";

type props = { top?: boolean }

export const InputStyle = styled.div<props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${({ top }) => top ? `100px`:  0}
`