import React from 'react';
import {BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();
  return (
    <div id="HomePage" className="container-fluid py-5">
      {/* Hero Section */}
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Welcome to VGCT</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Keep track of your videogames collection, create lists,
            manage your backlog, and compare achievements with your friends.<br/>
            All in one webpage!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Register
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4"
            onClick={() => navigate('LoginPage')}>
              Log in
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
    </div>
  );
}

export default HomePage;