import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container py-5">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Your Brand</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Welcome to Your Site</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with Bootstrap,
            the world's most popular front-end open source toolkit.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary Action
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Secondary Action
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="row g-4 py-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature One</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature Two</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature Three</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 my-4">
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
    </div>
  );
}

export default HomePage;