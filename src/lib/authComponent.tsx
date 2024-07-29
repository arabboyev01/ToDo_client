import { Fragment, ReactNode, useEffect } from "react"
import { GetMethod } from "../api/getMethod"
import { FieldType } from "../types/types"
import CustomRouter from "../hooks/customRoute"
import Loader from "../hooks/Loader"

type AuthProps = { children: ReactNode, role: string }

export default function AuthComponent({ children, role }: AuthProps) {
    const { isError, isLoading, error, data } = GetMethod<FieldType>('user')
    const { navigate } = CustomRouter()

    useEffect(() => {
        if (isError && error) {
            const status = (error as any)?.response?.status;
            if (status === 401) {
                navigate('/login');
                return;
            }
        }

        if (!isLoading && data) {
            const userRole = data.data.data.role;

            if (role === 'admin') {
                if (userRole !== 'admin') {
                    navigate('/login')
                }
            } else {
                if (userRole === 'admin') {
                    navigate('/admin')
                }
            }
        }
    }, [isError, error, isLoading, navigate, data, role])

    if (isLoading) {
        return <Loader size="large" />
    }

    return <Fragment>{children}</Fragment>
}