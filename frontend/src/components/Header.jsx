import React from 'react';
import { Link, useNavigate, redirect } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom bg-light">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-xl font-bold text-gray-800">
                                VGCT
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="text-gray-600 hover:text-gray-900">
                                Home
                            </Link>
                            <Link to="/about" className="text-gray-600 hover:text-gray-900">
                                About
                            </Link>
                            <Link to="/login" className="text-gray-600 hover:text-gray-900">
                                Login
                            </Link>
                            <Link to="/signup" className="text-gray-600 hover:text-gray-900">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;