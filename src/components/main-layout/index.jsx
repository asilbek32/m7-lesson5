import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="h-[64px] flex items-center justify-center font-bold text-gray-700">
          LingLee
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: (
                <div onClick={() => navigate("/dashboard")}>Dashboard</div>
              ),
            },
            {
              key: "2",
              label: <div onClick={() => navigate("/products")}>Products</div>,
            },
            {
              key: "3",
              label: (
                <div onClick={() => navigate("/addProduct")}>AddProduct</div>
              ),
            },
            {
              key: "4",
              label: <div onClick={() => navigate("/settings")}>Settings</div>,
            },
          ]}
          style={{
            backgroundColor: "#ffffff",
          }}
        />
      </Sider>

      <Layout style={{ background: "#ffffff" }}>
        <Header
          style={{
            padding: "0 20px",
            background: colorBgContainer,
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="flex items-center gap-2">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar src="/user.png" icon={<UserOutlined />} />
            </div>
            <Button
              type="text"
              icon={<LogoutOutlined style={{ color: "red", fontSize: 18 }} />}
              onClick={handleLogout}
              title="Logout"
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
