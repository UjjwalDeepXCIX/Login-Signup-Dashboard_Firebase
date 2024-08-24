import React from 'react';
import { Layout, Card, Avatar, Button, Form, Input, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import Sidebar from '../Sidebar';  // Adjust the path as necessary
import "../../App.css";  // Adjust the path

const { Content } = Layout;

const Profile = () => {
  const handleFormSubmit = (values) => {
    console.log('Form values: ', values);
    // Handle form submission
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', borderRadius: 8 }}>
          <h2>User Profile</h2>
          <Row gutter={24}>
            <Col span={8}>
              <Card style={{ textAlign: 'center' }}>
                <Avatar size={100} icon={<UserOutlined />} />
                <h3>John Doe</h3>
                <p>john.doe@example.com</p>
                <Button type="primary">Edit Profile</Button>
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Personal Information">
                <Form
                  name="profileForm"
                  initialValues={{ remember: true }}
                  onFinish={handleFormSubmit}
                  layout="vertical"
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="John Doe" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input prefix={<MailOutlined />} placeholder="john.doe@example.com" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">Save Changes</Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Profile;
