import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import LoginForm from '../components/user/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  
  const handleLoginSuccess = () => {
    navigate('/profile');
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Card>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to BookBuddy</h1>
            
            <LoginForm onSuccess={handleLoginSuccess} />
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-800">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;