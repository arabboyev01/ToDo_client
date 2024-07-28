import * as I from '@ant-design/icons'

export const Items = [
    {
        key: '1',
        icon: <I.VideoCameraOutlined />,
        label: 'Dashboard',
        path: '/dashboard',
    },
    {
        key: '2',
        icon: <I.UserOutlined />,
        label: 'Tasks',
        path: '/tasks',
    },
    {
        key: '3',
        icon: <I.UserOutlined />,
        label: 'Users',
        path: '/users',
    },
]

export const ButtonStyle = {
    fontSize: '16px',
    width: 64,
    height: 64,
}
export const contentStyle = (colorBgContainer: string, borderRadiusLG: number) => {
    return {
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
    }
}

export const handleMenuClick = (navigate: any) => {
    const navigateRoute = ({ key }: { key: string }) => {
        switch (key) {
            case '1':
                navigate('/admin')
                break;
            case '2':
                navigate('/admin/tasks')
                break
            case '3':
                navigate('/admin/users')
                break
            default:
                break
        }
    }

    return navigateRoute
}