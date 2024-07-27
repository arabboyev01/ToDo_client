import { StyledLoader } from "./hooks.style"
import { Spin } from 'antd'

export default function Loader({ size }: { size: "large" | "small" | "default" | undefined }){
    return(
        <StyledLoader>
            <Spin size={size} />
        </StyledLoader>
    )
}