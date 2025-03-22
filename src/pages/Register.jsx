import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import RegisterForm from '../components/user/RegisterForm';

const Register = () => {
  const navigate = useNavigate();
  
  const handleRegisterSuccess = () => {
    navigate('/profile');
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Card>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h1>
            
            <RegisterForm onSuccess={handleRegisterSuccess} />
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-800">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;