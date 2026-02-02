
import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { authService, type UserData } from '@/services/authService';

const Account: React.FC = () => {
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser({
                fullName: 'Marry Doe',
                email: 'Marry@Gmail.Com',
                isAgency: 'No'
            });
        }
    }, []);

    return (
        <Layout>
            <div className="flex flex-col h-full bg-white -m-6 min-h-screen md:min-h-0 md:h-full relative">

                {/* Header Section */}
                <div className="flex flex-col bg-white px-6 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-6">
                    <h1 className="text-[18px] font-medium text-[#1D2939]">Account Settings</h1>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col px-6 gap-6 flex-1">
                    <div className="flex gap-5 items-start">
                        <div className="w-[76px] h-[76px] relative flex-shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marry"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-[2.5px] border-white">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col pt-2 gap-1">
                            <h2 className="text-[15px] font-bold text-[#1D2939]">{user?.fullName || 'Marry Doe'}</h2>
                            <p className="text-[14px] text-[#475467]">{user?.email || 'Marry@Gmail.Com'}</p>
                        </div>
                    </div>

                    <div className="text-[13px] text-[#475467] leading-[22px] max-w-[90%]">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </div>
                </div>

                {/* Dashed Lines / Bottom Section */}
                <div className="px-6 flex flex-col mt-auto pb-6 gap-6">
                    <div className="w-full border-t border-dashed border-[#D0D5DD]"></div>
                    <div className="w-full border-t border-dashed border-[#D0D5DD] mb-6"></div>
                </div>
            </div>
        </Layout>
    );
};

export default Account;
