import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png';
import axios from 'axios';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/api/user', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data', error);
      });
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesMenu = () => {
    setServicesOpen(!servicesOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const handleServiceClick = (path) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-2" />
      </div>
      <div className="relative">
        <button onClick={toggleMenu} className="text-blueketba text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
            {user ? (
              <>
                <p className="block px-4 py-2 text-blueketba">Hello, {user.firstName} {user.lastName}</p>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-blueketba hover:bg-gray-100">Logout</button>
                <div className="border-t my-2"></div>
                <button onClick={() => handleServiceClick('/ask-for-nurse')} className="block w-full text-left px-4 py-2 text-blueketba hover:bg-gray-100">Ask for a Nurse</button>
                <button onClick={() => handleServiceClick('/ask-for-doctor')} className="block w-full text-left px-4 py-2 text-blueketba hover:bg-gray-100">Ask for a Doctor</button>
              </>
            ) : (
              <>
                <Link to="/register" className="block px-4 py-2 text-blueketba hover:bg-gray-100">Sign Up</Link>
                <Link to="/login" className="block px-4 py-2 text-blueketba hover:bg-gray-100">Sign In</Link>
                <div className="border-t my-2"></div>
                <button onClick={toggleServicesMenu} className="w-full text-left px-4 py-2 text-blueketba hover:bg-gray-100">Services</button>
                {servicesOpen && (
                  <div className="pl-4">
                    <button onClick={() => handleServiceClick('/services/nurse')} className="block w-full text-left px-4 py-2 text-darkGreen1 hover:bg-gray-100">Nurse</button>
                    <button onClick={() => handleServiceClick('/services/doctor')} className="block w-full text-left px-4 py-2 text-darkGreen1 hover:bg-gray-100">Doctor</button>
                    <Link to="/services/pharmacy" className="block px-4 py-2 text-blueketba hover:bg-gray-100">Pharmacy</Link>
                  </div>
                )}
              </>
            )}
            <div className="border-t my-2"></div>
            <Link to="/about-us" className="block px-4 py-2 text-blueketba hover:bg-gray-100">About Us</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
