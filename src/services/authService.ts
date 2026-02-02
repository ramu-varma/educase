/**
 * Simulated Authentication Service
 * 
 * In a real application, these methods would make HTTP requests to a backend API.
 * Here validation is handled before calling these services, but double-checking is good practice.
 */

// Types for our service
export interface UserData {
    fullName?: string;
    email: string;
    password?: string;
    phone?: string;
    companyName?: string;
    isAgency?: string;
}

export const authService = {
    /**
     * Simulates a login API call
     * @param data - Login credentials
     * @returns Promise resolving to user data or error
     */
    login: async (email: string): Promise<UserData> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // In a real app, we'd get a token back. Here we just return mock data for the Account page.
                // We'll try to find existing user or default to a mock user.
                const stored = localStorage.getItem('user');
                const user = stored ? JSON.parse(stored) : {
                    fullName: 'Marry Doe',
                    email: email,
                    isAgency: 'No'
                };
                resolve(user);
            }, 1000); // Simulate network delay
        });
    },

    /**
     * Simulates a registration API call
     * @param data - Registration data
     * @returns Promise resolving to the created user
     */
    register: async (data: UserData): Promise<UserData> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Save to local storage to persist state across reloads (simulating a database)
                localStorage.setItem('user', JSON.stringify(data));
                resolve(data);
            }, 1000); // Simulate network delay
        });
    },

    /**
     * Retrieves current user data (e.g., from local storage or simulated token)
     */
    getCurrentUser: (): UserData | null => {
        const stored = localStorage.getItem('user');
        return stored ? JSON.parse(stored) : null;
    }
};
