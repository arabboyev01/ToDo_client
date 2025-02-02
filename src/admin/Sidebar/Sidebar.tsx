import { useState } from 'react'
import * as I from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { ButtonStyle, contentStyle, handleMenuClick, Items } from './config'
import CustomRouter from '../../hooks/customRoute'
import { Outlet } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const AdminPage = () => {
    
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    const { navigate } = CustomRouter()
    const navigateRoute = handleMenuClick(navigate)

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu 
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={navigateRoute}
                    items={Items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <I.MenuUnfoldOutlined /> : <I.MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={ButtonStyle}
                    />
                </Header>
                <Content style={contentStyle(colorBgContainer, borderRadiusLG)}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminPage