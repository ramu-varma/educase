import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { InputField } from '@/components/common/InputField';
import { Button } from '@/components/common/Button';
import { RadioGroup } from '@/components/common/RadioGroup';
import { validateEmail, validatePassword, validatePhone, validateRequired } from '@/utils/validation';
import { authService } from '@/services/authService';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: 'No'
    });
    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validate all required fields
    const getValidationState = () => {
        return {
            fullName: validateRequired(formData.fullName, 'Full Name'),
            phone: validatePhone(formData.phone),
            email: validateEmail(formData.email),
            password: validatePassword(formData.password),
        };
    };

    const isFormValid = () => {
        const currentErrors = getValidationState();
        return !currentErrors.fullName && !currentErrors.phone && !currentErrors.email && !currentErrors.password;
        // Company name is optional, agency has default
    };

    // Update state when input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Real-time validation for feedback
        let error = null;
        if (name === 'fullName') error = validateRequired(value, 'Full Name');
        if (name === 'phone') error = validatePhone(value);
        if (name === 'email') error = validateEmail(value);
        if (name === 'password') error = validatePassword(value);

        setErrors(prev => ({ ...prev, [name]: error }));
    };

    // Handle radio button selection
    const handleRadioChange = (value: string) => {
        setFormData(prev => ({ ...prev, isAgency: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid()) return;

        setIsSubmitting(true);

        try {
            // Use the centralized auth service
            await authService.register(formData);
            navigate('/account');
        } catch (error) {
            console.error("Registration failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <div className="flex flex-col gap-6 pt-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[28px] font-bold text-text leading-tight">
                        Create your <br /> PopX account
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
                    <InputField
                        label={<>Full Name<span className="text-error">*</span></>}
                        name="fullName"
                        type="text"
                        placeholder="Marry Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName || undefined}
                    />

                    <InputField
                        label={<>Phone number<span className="text-error">*</span></>}
                        name="phone"
                        type="tel"
                        placeholder="Marry Doe"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone || undefined}
                    />

                    <InputField
                        label={<>Email address<span className="text-error">*</span></>}
                        name="email"
                        type="email"
                        placeholder="Marry Doe"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email || undefined}
                    />

                    <InputField
                        label={<>Password<span className="text-error">*</span></>}
                        name="password"
                        type="password"
                        placeholder="Marry Doe"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password || undefined}
                    />

                    <InputField
                        label="Company name"
                        name="companyName"
                        type="text"
                        placeholder="Marry Doe"
                        value={formData.companyName}
                        onChange={handleChange}
                    />

                    <div className="mt-1">
                        <RadioGroup
                            label={<>Are you an Agency?<span className="text-error">*</span></>}
                            name="isAgency"
                            options={[
                                { label: 'Yes', value: 'Yes' },
                                { label: 'No', value: 'No' },
                            ]}
                            value={formData.isAgency}
                            onChange={handleRadioChange}
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        disabled={!isFormValid() || isSubmitting}
                        className="mt-6 text-white"
                        style={{ backgroundColor: !isFormValid() ? '#CBCBCB' : '' }}
                    >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </Button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
