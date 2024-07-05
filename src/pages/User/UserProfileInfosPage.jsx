import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfileInfos = () => {
  const [user, setUser] = useState({
    firstName: 'hamidat',
    lastName: 'damo9ran',
    email: 'zvenga@ex.com',
    phone: '123-456-7890',
    address: 'setif'
  });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdateProfile = () => {
    const token = localStorage.getItem('token');
    axios.put('http://localhost:3000/api/user-profile', user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      toast.success('Profile updated successfully!', {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true
      });
    })
    .catch(error => {
      console.error('Error updating profile', error);
      toast.error('Failed to update profile.', {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true
      });
    });
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match", {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true
      });
      return;
    }

    const token = localStorage.getItem('token');
    axios.put('http://localhost:3000/api/change-password', { newPassword }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      toast.success('Password changed successfully!', {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true
      });
      setNewPassword('');
      setConfirmPassword('');
    })
    .catch(error => {
      console.error('Error changing password', error);
      toast.error('Failed to change password.', {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true
      });
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-creme2 min-h-screen">
      <h2 className="text-2xl font-bold text-blueketba mb-4">User Profile</h2>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleInputChange}
          className="p-2 border rounded w-full"
        />
      </div>

      <button
        onClick={handleUpdateProfile}
        className="bg-blueketba text-white py-2 px-4 rounded hover:bg-bluefoot"
      >
        Update Profile
      </button>

      <h2 className="text-2xl font-bold text-blueketba mt-8 mb-4">Change Password</h2>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blueketba mb-2">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      <button
        onClick={handleChangePassword}
        className="bg-blueketba text-white py-2 px-4 rounded hover:bg-bluefoot"
      >
        Change Password
      </button>
    </div>
  );
};

export default UserProfileInfos;
