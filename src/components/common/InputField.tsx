import React, { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode;
    error?: string;
    containerClassName?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
    label,
    error,
    className = '',
    containerClassName = '',
    ...props
}, ref) => {
    return (
        <div className={`flex flex-col relative ${containerClassName}`}>
            <div className="relative">
                {label && (
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-[13px] font-medium text-primary z-10">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`
                w-full h-[46px] px-3 rounded-lg border bg-transparent text-text placeholder-gray-400 text-[14px]
                focus:border-primary focus:ring-0 outline-none transition-all duration-200
                ${error ? 'border-error' : 'border-[#CBCBCB]'} 
                ${className}
            `}
                    {...props}
                />
            </div>
            {error && (
                <span className="text-xs text-error ml-1 mt-1 font-medium animate-fadeIn text-right block">
                    {error}
                </span>
            )}
        </div>
    );
});

InputField.displayName = "InputField";
