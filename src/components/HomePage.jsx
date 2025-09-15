import React from 'react';
import { Card, Typography, Button, Row, Col, Space, Divider } from 'antd';
import {
    CheckCircleOutlined,
    PlusCircleOutlined,
    EditOutlined,
    DeleteOutlined,
    TrophyOutlined,
    RocketOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './HomePage.css';

const { Title, Paragraph, Text } = Typography;

const HomePage = () => {
    const features = [
        {
            icon: <PlusCircleOutlined className="feature-icon" />,
            title: "Add Tasks",
            description: "Quickly add new tasks to your todo list with our simple and intuitive interface."
        },
        {
            icon: <CheckCircleOutlined className="feature-icon" />,
            title: "Mark Complete",
            description: "Check off completed tasks and track your progress throughout the day."
        },
        {
            icon: <EditOutlined className="feature-icon" />,
            title: "Edit Tasks",
            description: "Easily modify your existing tasks with our built-in editing functionality."
        },
        {
            icon: <DeleteOutlined className="feature-icon" />,
            title: "Remove Tasks",
            description: "Delete tasks that are no longer needed to keep your list clean and organized."
        },
        {
            icon: <TrophyOutlined className="feature-icon" />,
            title: "View Completed",
            description: "Review all your completed tasks to celebrate your achievements."
        },
        {
            icon: <RocketOutlined className="feature-icon" />,
            title: "Stay Productive",
            description: "Boost your productivity with our clean and distraction-free design."
        }
    ];

    return (
        <div className="homepage-container">

            <div className="hero-section">
                <Card className="hero-card">
                    <div className="hero-content">
                        <Title level={1} className="hero-title">
                            Welcome to TodoMaster
                        </Title>
                        <Paragraph className="hero-description">
                            A simple, elegant, and powerful todo list application built with React and Ant Design.
                            Organize your tasks, boost your productivity, and achieve your goals effortlessly.
                        </Paragraph>
                        <Space size="large" className="hero-buttons">
                            <Button type="primary" size="large" className="cta-button">
                                <Link to="/todo" className="button-link">
                                    Get Started
                                </Link>
                            </Button>
                            <Button size="large" className="secondary-button">
                                <Link to="/completed" className="button-link">
                                    View Completed
                                </Link>
                            </Button>
                        </Space>
                    </div>
                </Card>
            </div>

            <Divider />


            <div className="features-section">
                <Title level={2} className="section-title">
                    Why Choose TodoMaster?
                </Title>
                <Row gutter={[24, 24]} className="features-grid">
                    {features.map((feature, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <Card className="feature-card" hoverable>
                                <div className="feature-content">
                                    {feature.icon}
                                    <Title level={4} className="feature-title">
                                        {feature.title}
                                    </Title>
                                    <Paragraph className="feature-description">
                                        {feature.description}
                                    </Paragraph>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <Divider />

            <div className="cta-section">
                <Card className="cta-card">
                    <Title level={3} className="cta-title">
                        Ready to Get Organized?
                    </Title>
                    <Paragraph className="cta-description">
                        Start managing your tasks more effectively today. Create your first todo item and experience
                        the difference of organized productivity.
                    </Paragraph>
                    <Button type="primary" size="large" className="cta-main-button">
                        <Link to="/todo" className="button-link">
                            Start Your Journey
                        </Link>
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default HomePage;
