import { Fragment, ReactNode, useEffect } from "react"
import { GetMethod } from "../api/getMethod"
import { FieldType } from "../types/types"
import CustomRouter from "../hooks/customRoute"
import Loader from "../hooks/Loader"

type AuthProps = { children: ReactNode }

export default function AuthComponent({ children }: AuthProps) {
    const { isError, isLoading, error } = GetMethod<FieldType>('user')
    const { navigate } = CustomRouter()

    useEffect(() => {
        if (isError && error) {
            const status = (error as any)?.response?.status
            if (status === 401) {
                navigate('/login');
            }
        }
    }, [isError, error, navigate])

    if (isLoading) {
        return <Loader size="large"/>
    }

    return <Fragment>{children}</Fragment>
}