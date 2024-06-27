// src/services/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Auth
export const registerUser = (data) => instance.post('/api/auth/register', data);
export const loginUser = (data) => instance.post('/api/auth/login', data);

// Users
export const getUserProfile = (id) => instance.get(`/api/users/${id}`);
export const updateUserProfile = (id, data) => instance.put(`/api/users/${id}`, data);

// Doctors
export const getAllDoctors = () => instance.get('/api/doctors');
export const getDoctorProfile = (id) => instance.get(`/api/doctors/${id}`);
export const updateDoctorProfile = (id, data) => instance.put(`/api/doctors/${id}`, data);
export const getDoctorAvailability = (id) => instance.get(`/api/doctors/${id}/availability`);
export const addDoctorAvailability = (id, data) => instance.post(`/api/doctors/${id}/availability`, data);

// Appointments
export const createAppointment = (data) => instance.post('/api/appointments', data);
export const getAppointments = () => instance.get('/api/appointments');

export default instance;
