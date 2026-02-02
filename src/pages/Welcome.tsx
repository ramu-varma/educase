import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Layout } from '@/components/layout/Layout';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="flex-1 flex flex-col justify-end gap-4 mb-12">
                <div className="flex flex-col gap-2 mb-2">
                    <h1 className="text-[28px] font-bold text-text leading-tight">
                        Welcome to PopX
                    </h1>
                    <p className="text-text-secondary text-lg leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <Button
                        variant="primary"
                        fullWidth
                        onClick={() => navigate('/register')}
                    >
                        Create Account
                    </Button>
                    <Button
                        variant="secondary"
                        fullWidth
                        onClick={() => navigate('/login')}
                    >
                        Already Registered? Login
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default Welcome;
