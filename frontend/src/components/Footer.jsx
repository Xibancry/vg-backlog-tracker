import React from 'react';

function Footer() {
    return (
        <footer className="py-3 my-4">
            {/* Footer */}
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a href="/" className="nav-link px-2 text-muted">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link px-2 text-muted">About</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link px-2 text-muted">Contact</a>
                </li>
            </ul>
            <p className="text-center text-muted">© 2025 Your Company, Inc</p>
        </footer>
    );
}

export default Footer;