import React from 'react';
import Navbar from '@/components/navbar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
        <div className="flex flex-col">
            <Navbar />
        </div>
        <main className="flex-grow p-4 bg-slate-100">
            {children}
        </main>
        <footer className="bg-slate-100 text-black py-4 text-center shadow-md">
            <div className="container mx-auto">
            &copy; {new Date().getFullYear()} Movies.db. All rights reserved.
            </div>
        </footer>
    </div>
  );
};

export default DashboardLayout;
