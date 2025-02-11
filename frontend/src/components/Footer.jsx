import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center space-x-6">
                    <Link to="/" className="text-gray-500 hover:text-gray-900">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-500 hover:text-gray-900">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-500 hover:text-gray-900">
                        Contact
                    </Link>
                </nav>
                <p className="mt-8 text-center text-gray-400">
                    © 2025 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;