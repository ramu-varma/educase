import React from 'react';

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupProps {
    label?: React.ReactNode;
    name: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    name,
    options,
    value,
    onChange,
    error
}) => {
    return (
        <div className="flex flex-col gap-3">
            {label && <label className="text-[13px] font-medium text-text ml-0">{label}</label>}
            <div className="flex gap-4">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center cursor-pointer group">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) => onChange(e.target.value)}
                            className="hidden"
                        />
                        <div className={`
              w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 transition-colors
              ${value === option.value ? 'border-primary' : 'border-gray-300 group-hover:border-primary'}
            `}>
                            {value === option.value && (
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            )}
                        </div>
                        <span className={`text-sm ${value === option.value ? 'text-text font-medium' : 'text-text-secondary'}`}>
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
            {error && <span className="text-xs text-error ml-1">{error}</span>}
        </div>
    );
};
