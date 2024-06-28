import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
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
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-creme2 min-h-screen">
      <div className="flex items-center space-x-4">
        <img src="/path-to-avatar.png" alt="Avatar" className="w-16 h-16 rounded-full"/>
        <div>
          <h2 className="text-xl font-bold text-darkGreen1">Hi {user.firstName} {user.lastName}</h2>
          <p className="text-darkGreen4">How is your health?</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-darkGreen2">Services</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <Link to="/Doctor-search" className="bg-lightGreen text-darkGreen1 p-4 rounded shadow-md hover:bg-greenHover">
            <h4 className="font-bold">Medicine</h4>
            <p>Reserve your day with the best services now</p>
          </Link>
          <Link to="/user-asking" className="bg-lightGreen text-darkGreen1 p-4 rounded shadow-md hover:bg-greenHover">
            <h4 className="font-bold">Nursing</h4>
            <p>Care services provided at home</p>
          </Link>
          <Link to="/pharmacy-selection" className="bg-lightGreen text-darkGreen1 p-4 rounded shadow-md hover:bg-greenHover">
            <h4 className="font-bold">Pharmacy</h4>
            <p>Get your medications delivered to your door</p>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-darkGreen2">Categories</h3>
        <div className="flex space-x-4 mt-4">
          <Link to="/general" className="bg-lightGrey p-4 rounded shadow-md hover:bg-greyHover text-darkGreen2">
            General
          </Link>
          <Link to="/specialized" className="bg-lightGrey p-4 rounded shadow-md hover:bg-greyHover text-darkGreen2">
            Specialized
          </Link>
          <Link to="/home-care" className="bg-lightGrey p-4 rounded shadow-md hover:bg-greyHover text-darkGreen2">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
