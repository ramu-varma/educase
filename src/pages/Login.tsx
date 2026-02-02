import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { InputField } from '@/components/common/InputField';
import { Button } from '@/components/common/Button';
import { validateEmail, validatePassword } from '@/utils/validation';
import { authService } from '@/services/authService';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Check if form is valid to enable/disable login button
    const isFormValid =
        formData.email.length > 0 &&
        formData.password.length > 0 &&
        !validateEmail(formData.email) &&
        !validatePassword(formData.password);

    // Handle input changes and real-time validation
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Validate field immediately when user types
        let error = null;
        if (name === 'email') error = validateEmail(value);
        if (name === 'password') error = validatePassword(value);

        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);

        try {
            // Use the centralized auth service
            await authService.login(formData.email);
            // Navigate after successful login
            navigate('/account');
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <div className="flex flex-col gap-6 pt-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[28px] font-bold text-text leading-tight">
                        Signin to your <br /> PopX account
                    </h1>
                    <p className="text-text-secondary text-lg leading-6 max-w-[280px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
                    <div className="flex flex-col gap-6">
                        <InputField
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email || undefined}
                        />
                        <InputField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password || undefined}
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="secondary"
                        fullWidth
                        disabled={!isFormValid || isSubmitting}
                        className={`mt-2 ${isFormValid ? '!bg-primary !text-white' : '!bg-[#CBCBCB] !text-white'}`}
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
