import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    showBackButton?: boolean; // Optional for future use if we want a back header
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-[#f0f2f5] flex items-center justify-center p-0 md:p-4 font-sans text-text">
            {/* Mobile-device simulator container */}
            <div className="w-full h-full min-h-screen md:min-h-0 md:h-[844px] md:w-[390px] bg-white md:rounded-[30px] md:shadow-2xl overflow-hidden flex flex-col relative animate-fadeIn border-0 md:border-[8px] md:border-white ring-1 ring-black/5">
                <div className="flex-1 flex flex-col w-full h-full overflow-y-auto custom-scrollbar relative">
                    <div className="flex-1 flex flex-col p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
