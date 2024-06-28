import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LandingPage = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
      axios.get('http://localhost:3000/api/user-profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data', error);
      });

  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">Welcome, {user.firstName} {user.lastName}</h2>
      <div className="mt-4 space-y-4">
        <p>Here are some options you can explore:</p>
        <div className="flex flex-col space-y-4">
          <Link to="/user-profile" className="btn">
            View Profile
          </Link>
          <Link to="/user-asking" className="btn">
            Request a Nurse
          </Link>
          <Link to="/user-map" className="btn">
            Set Your Position
          </Link>
          <Link to="/user-result" className="btn">
            View Nurse Results
          </Link>
          <Link to="/user-accepted" className="btn">
            View Accepted Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
