import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineEye, HiEyeOff } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const PractitionerSignupPage = () => {
  const [practitionerType, setPractitionerType] = useState('doctor');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("The passwords don't match", {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
      return;
    }

    const endpoint = practitionerType === 'doctor' ? 'signup-doctor' : 'signup-nurse';

    axios.post(`http://localhost:3000/api/${endpoint}`, {
      firstName,
      lastName,
      email,
      phone,
      speciality,
      password
    })
      .then((response) => {
        toast.success(response.data.message, {
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
        });
        navigate('/login');
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message, {
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center bg-creme2 py-1 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-darkGreen1">
              Practitioner Sign Up
            </h2>
          </div>
          <div>
            <label htmlFor="practitionerType" className="sr-only">
              Practitioner Type
            </label>
            <select
              id="practitionerType"
              name="practitionerType"
              value={practitionerType}
              onChange={(e) => setPractitionerType(e.target.value)}
              className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
            >
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
            </select>
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none my-1 relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
            {practitionerType === 'doctor' && (
              <div>
                <label htmlFor="speciality" className="sr-only">
                  Speciality
                </label>
                <input
                  id="speciality"
                  name="speciality"
                  type="text"
                  value={speciality}
                  onChange={(e) => setSpeciality(e.target.value)}
                  required
                  className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
                  placeholder="Speciality"
                />
              </div>
            )}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-1 right-0 pr-3 flex items-center cursor-pointer"
                style={{ zIndex: 20 }}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <HiOutlineEye className="w-8 h-10 text-gray-400 absolute inset-y-1 right-0 pr-3 flex items-center cursor-pointer" />
                ) : (
                  <HiEyeOff className="w-8 h-10 text-gray-400 absolute inset-y-1 right-0 pr-3 flex items-center cursor-pointer" />
                )}
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={isPasswordVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="appearance-none my-1 rounded-none relative block w-full px-3 py-4 border-b-2 border-darkGreen2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-darkGreen2 focus:border-darkGreen2 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2 mb-6" />
            <p>
              By signing up, you agree to our{" "}
              <Link
                to="/terms"
                className="font-medium text-darkGreen2 hover:text-darkGreen1 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="font-medium text-darkGreen2 hover:text-darkGreen1 hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-darkGreen2 hover:bg-greenHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenHover"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="font-medium text-center text-sm ">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-darkGreen2 hover:text-darkGreen1 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PractitionerSignupPage;
