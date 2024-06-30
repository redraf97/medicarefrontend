import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorLayout from '../../Layout/DoctorLayout';
import PatientHistoryItem from '../../components/Doctor/PatientHistoryItem';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const HistoryPage = () => {
  const [patientHistory, setPatientHistory] = useState([
    { firstName: 'Omar', lastName: 'Meddah', date: '2024-06-01', time: '10:00 AM', status: 'completed' },
    { firstName: 'Mehdi', lastName: 'Oustad', date: '2024-06-02', time: '11:00 AM', status: 'completed' },
    { firstName: 'Skander', lastName: 'Zemouri', date: '2024-06-03', time: '09:00 AM', status: 'completed' },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:3000/api/patient-history', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setPatientHistory(response.data);
    })
    .catch(error => {
      console.error('Error fetching patient history:', error);
      toast.error('Failed to fetch patient history');
    });
  }, [navigate]);

  return (
    <DoctorLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-darkGreen1 mb-4">Patient History</h1>
        {patientHistory.length > 0 ? (
          patientHistory.map((patient, index) => (
            <PatientHistoryItem key={index} patient={patient} />
          ))
        ) : (
          <p>No patient history available.</p>
        )}
        <ToastContainer />
      </div>
    </DoctorLayout>
  );
};

export default HistoryPage;
