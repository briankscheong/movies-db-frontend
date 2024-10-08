// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-100 text-black py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            
            {/* Logo */}
            <div className="text-2xl font-extrabold text-gray-800">
            <Link href="/" className="hover:text-slate-600 transition duration-300 font-mono">
                Movies.db
            </Link>
            </div>

            {/* Links */}
            <div className="flex space-x-6">
                <Link href="/" className="text-lg font-medium text-gray-700 relative group">
                    Home
                    {/* Animated underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {/* Uncomment these as needed */}
                {/* <Link href="/about" className="text-lg font-medium text-gray-700 relative group">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="text-lg font-medium text-gray-700 relative group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
                </Link> */}
                {/* <Link href="/auth" className="text-lg font-medium text-gray-700 relative group">
                    Login
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
                </Link> */}
            </div>
            
        </div>
    </nav>
  );
};

export default Navbar;
