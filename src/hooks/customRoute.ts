import { useNavigate } from "react-router-dom"

export default function CustomRouter(){
    const navigate = useNavigate()

    return { navigate }
}