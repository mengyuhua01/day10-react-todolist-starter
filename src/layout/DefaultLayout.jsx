import {NavLink, Outlet, useLocation} from "react-router";
import {Layout, Menu, theme } from 'antd';
import {UnorderedListOutlined,HomeOutlined,CheckCircleOutlined,InfoCircleOutlined} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const items = [
    { label: (<NavLink to="/">Home</NavLink>), key: 'home',icon: <HomeOutlined /> },
    { label: (<NavLink to="/about">About</NavLink>), key: 'about', icon: <InfoCircleOutlined /> },
    { label: (<NavLink to="/todo">Todo List</NavLink>), key: 'todo' ,icon: <UnorderedListOutlined />},
    { label: (<NavLink to="/completed">Completed</NavLink>), key: 'completed' ,icon: <CheckCircleOutlined />},
];

// 根据路径获取对应的菜单key
const getSelectedKey = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname === '/about') return 'about';
    if (pathname === '/todo') return 'todo';
    if (pathname === '/completed') return 'completed';
    return 'home'; // 默认选中home
};

export function DefaultLayout() {
    const location = useLocation();
    const selectedKey = getSelectedKey(location.pathname);

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
                    selectedKeys={[selectedKey]}
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
                Leo Design ©{new Date().getFullYear()} Created by MENGLE
            </Footer>
        </Layout>
    );
}
export default DefaultLayout;