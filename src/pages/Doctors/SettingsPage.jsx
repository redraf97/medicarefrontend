import React, { useState, useEffect } from 'react';
import DoctorLayout from '../../Layout/DoctorLayout';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:3000/api/personal-info', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setPersonalInfo(response.data);
    })
    .catch(error => {
      toast.error('Failed to fetch personal information');
    });
  }, [navigate]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3000/api/update-personal-info', personalInfo, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      toast.success(response.data.message);
    })
    .catch(error => {
      toast.error('Failed to update personal information');
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3000/api/update-password', password, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      toast.success(response.data.message);
    })
    .catch(error => {
      toast.error('Failed to update password');
    });
  };

  return (
    <DoctorLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-darkGreen1 mb-4">Settings</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <form onSubmit={handlePersonalInfoSubmit}>
            <div className="mb-4">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-darkGreen1 text-white px-4 py-2 rounded-md"
            >
              Update Information
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-darkGreen1 text-white px-4 py-2 rounded-md"
            >
              Change Password
            </button>
          </form>
        </div>

        <ToastContainer />
      </div>
    </DoctorLayout>
  );
};

export default SettingsPage;
