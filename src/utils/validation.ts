export const validateEmail = (email: string): string | null => {
    if (!email) return "Email is required";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Please enter a valid email address";
    return null;
};

export const validatePassword = (password: string): string | null => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return null;
};

export const validatePhone = (phone: string): string | null => {
    if (!phone) return "Phone number is required";
    const numericPhone = phone.replace(/\D/g, '');
    if (numericPhone.length !== 10) return "Phone number must be 10 digits";
    return null;
};

export const validateRequired = (value: string, fieldName: string): string | null => {
    if (!value || value.trim() === '') return `${fieldName} is required`;
    return null;
};
