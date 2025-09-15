import React from 'react';
import { Card, List, Typography, Empty, Tag, Divider, Avatar } from 'antd';
import { CheckCircleOutlined, CalendarOutlined, TrophyOutlined } from '@ant-design/icons';
import { useTodoService } from '../hooks/useTodoService';
import './CompletedTodos.css';

const { Title, Text } = Typography;

const CompletedTodos = () => {
    const { todos } = useTodoService();

    // 过滤出已完成的 todos
    const completedTodos = todos.filter(todo => todo.done);

    return (
        <div className="completed-todos-container">
            <Card className="completed-todos-card">
                <div className="header-section">
                    <TrophyOutlined className="header-icon" />
                    <Title level={2} className="page-title">
                        Completed Tasks
                    </Title>
                    <Tag color="success" className="count-tag">
                        {completedTodos.length} completed
                    </Tag>
                </div>

                <Divider />

                {completedTodos.length > 0 ? (
                    <List
                        className="completed-list"
                        dataSource={completedTodos}
                        renderItem={(item) => (
                            <List.Item className="completed-item">
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            size={40}
                                            className="task-avatar"
                                            icon={<CheckCircleOutlined />}
                                        />
                                    }
                                    title={
                                        <div className="task-title">
                                            <Text className="todo-text">{item.text}</Text>
                                        </div>
                                    }
                                    description={
                                        <div className="task-meta">
                                            <CalendarOutlined className="calendar-icon" />
                                            <Text type="secondary" className="completion-date">
                                                Completed on {new Date().toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </Text>
                                        </div>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                ) : (
                    <Empty
                        className="empty-state"
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={
                            <div className="empty-description">
                                <Text strong>No completed tasks yet</Text>
                                <br />
                                <Text type="secondary">Complete some tasks and they will appear here</Text>
                            </div>
                        }
                    />
                )}
            </Card>
        </div>
    );
};

export default CompletedTodos;
