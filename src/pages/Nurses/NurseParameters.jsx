import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const NurseParametersPage = () => {
  const [nurseInfo, setNurseInfo] = useState({
    name: 'salim',
    specialization: 'General Nurse',
    email: 'salimberber@jml.com',
    phone: '+213600000000',
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    axios.get('/api/nurse/profile')
      .then((response) => {
        setNurseInfo(response.data);
      })
      .catch((error) => {
        toast.error('Failed to fetch nurse information');
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNurseInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/nurse/profile', nurseInfo)
      .then(() => {
        toast.success('Profile updated successfully');
      })
      .catch((error) => {
        toast.error('Failed to update profile');
      });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New password and confirmation do not match");
      return;
    }

    axios.put('/api/nurse/change-password', {
      currentPassword: passwords.currentPassword,
      newPassword: passwords.newPassword,
    })
      .then(() => {
        toast.success('Password changed successfully');
        setPasswords({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      })
      .catch((error) => {
        toast.error('Failed to change password');
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-blueketba">Nurse Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blueketba">Name</label>
          <input
            type="text"
            name="name"
            value={nurseInfo.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-blueketba shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blueketba">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={nurseInfo.specialization}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-blueketba shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blueketba">Email</label>
          <input
            type="email"
            name="email"
            value={nurseInfo.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-blueketba shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blueketba">Phone</label>
          <input
            type="tel"
            name="phone"
            value={nurseInfo.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-blueketba shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blueketba text-white py-2 px-4 rounded hover:bg-bluefoot"
        >
          Save Changes
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8 text-blueketba">Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blueketba">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handlePasswordChange}
            className="mt-1 block w-full rounded-md border-blueketba shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blueketba">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
            className="mt-1 block w-full rounded-md border-blueketba shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-blueketba">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handlePasswordChange}
            className="mt-1 block w-full rounded-md border-blueketba shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blueketba text-white py-2 px-4 rounded hover:bg-bluefoot"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default NurseParametersPage;
