import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {UnorderedListOutlined,HomeOutlined} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const items = [
    { label: (<NavLink to="/">Home</NavLink>), key: 'home',icon: <HomeOutlined /> },
    { label: (<NavLink to="/about">About</NavLink>), key: 'about' },
    { label: (<NavLink to="/todo">Todo List</NavLink>), key: 'todo' ,icon: <UnorderedListOutlined />},
];
export function DefaultLayout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                   <Outlet></Outlet>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
}
export default DefaultLayout;