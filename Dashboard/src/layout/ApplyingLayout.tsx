import React, { ReactNode } from 'react';
import SidebarPrint from '../pages/Applying/SidebarPrint';

const ApplyingLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <div className="siderbar min-w-[400px]  border-0 border-r h-full">
        <SidebarPrint />
      </div>
      <main className="w-full">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default ApplyingLayout;
