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
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed, onLogout }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to profile page
  };
  const handleDashboardClick = () => {
    navigate('/dashboard'); // Navigate to profile page
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}onClick={handleDashboardClick}>
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
        <Menu.Item key="6" icon={<UserOutlined />} onClick={handleProfileClick}>
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
