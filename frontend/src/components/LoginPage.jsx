import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left side - Login Form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full px-6">
            <div className="bg-white py-8 px-6 shadow rounded-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
                <p className="text-sm text-gray-500 mt-2">
                  Please sign in to your account
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="text-gray-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="text-gray-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-900">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>

        {/* Right side - Decorative */}
        <div className="hidden lg:block relative flex-1 bg-indigo-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold">Welcome Back</h2>
              <p className="mt-4 text-lg">Sign in to access your account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;