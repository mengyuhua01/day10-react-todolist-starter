import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <Result
                status="404"
                title="404"
                subTitle="抱歉，您访问的页面不存在。"
                extra={
                    <Button type="primary">
                        <Link to="/">返回首页</Link>
                    </Button>
                }
            />
        </div>
    );
};

export default ErrorPage;
