import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DoctorLayout from '../../Layout/DoctorLayout';
import DoctorInfo from '../../components/Doctor/DoctorInfo';
import SetAvailability from '../../components/Doctor/SetAvailability';
import AvailabilityItem from '../../components/Doctor/AvailabilityItem';
import Modal from '../../components/Doctor/Modal';
import Swal from 'sweetalert2';

const DoctorProfilePage = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    id: 1,
    name: 'Dr. Zemouri Slim',
    specialty: 'Cardiology',
    image: '/src/assets/images/avtr.png',
    availability: [],
  });

  const [availableDates, setAvailableDates] = useState([
    { day: 'Monday', startTime: '08:00', endTime: '12:00', workDuration: 30 },
    { day: 'Tuesday', startTime: '10:00', endTime: '15:00', workDuration: 30 },
    { day: 'Wednesday', startTime: '09:00', endTime: '13:00', workDuration: 30 },
  ]);

  const [selectedDay, setSelectedDay] = useState(null);
  const [showAvailabilityForm, setShowAvailabilityForm] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const [appointments, setAppointments] = useState([
    { day: 'Monday', patientName: 'Dounia', time: '09:00' },
    { day: 'Monday', patientName: 'Mehdi', time: '10:00' },
    { day: 'Tuesday', patientName: 'islam', time: '11:00' },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchDoctorInfo = () => {
      axios.get('http://localhost:3000/api/doctors/1', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setDoctorInfo(response.data);
        setAvailableDates(response.data.availability || []);
      })
      .catch(error => {
        console.error('Error fetching doctor info:', error);
        toast.error('Failed to fetch doctor information');
      });
    };

    fetchDoctorInfo();
  }, [navigate]);

  const handleAddAvailability = (newAvailability) => {
    setAvailableDates([...availableDates, newAvailability]);
    setShowAvailabilityForm(false);
    toast.success('Availability added successfully');
  };

  const handleDeleteAvailability = (day) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:3000/api/doctors/1/availability/${day}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
          const updatedDates = availableDates.filter(availability => availability.day !== day);
          setAvailableDates(updatedDates);
          if (selectedDay === day) {
            setSelectedDay(null);
            setAppointments([]);
          }
          Swal.fire('Deleted!', 'Your availability has been deleted.', 'success');
        })
        .catch(error => {
          console.error('Error deleting availability:', error);
          toast.error('Failed to delete availability');
        });
      }
    });
  };

  const handleDayClick = (day) => {
    if (deleteMode) {
      handleDeleteAvailability(day);
      setDeleteMode(false);
    } else {
      setSelectedDay(day);
      const dayAppointments = appointments.filter(app => app.day === day);
      setAppointments(dayAppointments);
    }
  };

  return (
    <DoctorLayout>
      <div className="container mx-auto p-6">
        <DoctorInfo doctor={doctorInfo} />
        <div className="flex justify-end space-x-4 mb-4">
          <button
            onClick={() => setShowAvailabilityForm(true)}
            className="bg-darkGreen1 text-white px-4 py-2 rounded-md"
          >
            Add Availability
          </button>
          <button
            onClick={() => setDeleteMode(!deleteMode)}
            className={`px-4 py-2 rounded-md ${deleteMode ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {deleteMode ? 'Cancel Delete' : 'Delete an Availability'}
          </button>
        </div>
        <Modal isVisible={showAvailabilityForm} onClose={() => setShowAvailabilityForm(false)}>
          <SetAvailability doctorId={doctorInfo.id} onAddAvailability={handleAddAvailability} />
        </Modal>
        <h1 className="text-2xl font-semibold mb-4 text-darkGreen1">Availabilities</h1>
        <div className="mt-6 flex overflow-x-auto space-x-4 pb-4">
          {availableDates.map((availability, index) => (
            <div key={index} className="min-w-[100px]">
              <AvailabilityItem
                availability={availability}
                onClick={() => handleDayClick(availability.day)}
                deleteMode={deleteMode}
              />
            </div>
          ))}
        </div>

        {selectedDay && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-darkGreen1">Appointments for {selectedDay}</h3>
            {appointments.length > 0 ? (
              <ul>
                {appointments.map((appointment, index) => (
                  <li key={index} className="mb-2">
                    {appointment.patientName} - {appointment.time}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No appointments for this day.</p>
            )}
          </div>
        )}
        
        <ToastContainer />
      </div>
    </DoctorLayout>
  );
};

export default DoctorProfilePage;
