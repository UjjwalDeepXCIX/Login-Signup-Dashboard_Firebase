import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreAddOutlined,
  LayoutOutlined,
  FireOutlined,
  UserOutlined,
  LoginOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed, onLogout }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboards
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<AppstoreAddOutlined />} title="Apps">
          <Menu.Item key="2">Layouts</Menu.Item>
          <Menu.Item key="3">Hot</Menu.Item>
          {/* Add more items as needed */}
        </Menu.SubMenu>
        <Menu.Item key="4" icon={<LayoutOutlined />}>
          Layouts
        </Menu.Item>
        <Menu.Item key="5" icon={<FireOutlined />}>
          Hot
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="7" icon={<LoginOutlined />} onClick={onLogout}>
          Logout
        </Menu.Item>
        <Menu.Item key="8" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
