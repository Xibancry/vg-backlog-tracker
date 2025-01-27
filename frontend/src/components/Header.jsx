import React from 'react';

function Header() {
    return (
        <header className="sticky-top flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom bg-light">
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="me-auto">
                        <a className="navbar-brand" href="/">Video Game Checkpoint Tracker</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse ms-4 me-auto" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Backlog</a>
                            </li>
                        </ul>
                        <div className="ms-auto">
                            <button type="button" className="btn btn-primary pe-3 me-2">Register</button>
                            <button type="button" className="btn btn-secondary pe-3 me-2">Log in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;