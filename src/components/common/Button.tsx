import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    disabled,
    ...props
}) => {
    const baseStyles = "h-[46px] flex items-center justify-center px-6 rounded-xl font-medium transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed text-base";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-[0_4px_14px_0_rgba(108,37,255,0.39)] hover:shadow-[0_6px_20px_rgba(108,37,255,0.23)]",
        secondary: "bg-primary-light text-text hover:bg-[#EBE0FF] focus:ring-primary-light border border-transparent"
    };

    return (
        <button
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
