import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      console.log('Submitting form data:', formData);
      // Add your registration logic here
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="vh-100 vw-100 bg-light">
      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Left side - Sign Up Form */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <div className="w-75">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <h4 className="card-title mb-2">Create an Account</h4>
                    <p className="text-muted">Join our community today</p>
                  </div>

                  {/* Error Display */}
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {/* Sign Up Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="nickname" className="form-label">
                        Nickname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nickname"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        placeholder="Choose a nickname"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="dateOfBirth" className="form-label">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Create Account
                      </button>
                    </div>
                  </form>

                  {/* Login link */}
                  <div className="text-center mt-4">
                    <p className="mb-0">
                      Already have an account?{' '}
                      <Link to="/login" className="text-decoration-none">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Background or Image */}
          <div className="col-md-6 bg-primary d-none d-md-flex align-items-center justify-content-center">
            <div className="text-white text-center">
              <h2>Join Our Community</h2>
              <p className="lead">Create an account to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;