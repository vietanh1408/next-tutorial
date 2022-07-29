import { LayoutProps } from "@/models/common";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Card, Layout, Menu } from "antd";
import { useState } from "react";
import Auth from "../common/auth";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const AdminLayout = ({ children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Auth>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <Card
            className="logo"
            bordered
            style={{ textAlign: "center", height: "64px" }}
          >
            LOGO
          </Card>
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px", paddingTop: 24 }}>
            {children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Root Project ©2022 Created by Lai Viet Anh
          </Footer>
        </Layout>
      </Layout>
    </Auth>
  );
};

export default AdminLayout;
