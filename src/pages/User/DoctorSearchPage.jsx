import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DoctorCard from '../../components/DoctorCard';

const DoctorSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [appointmentDoctor, setAppointmentDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch all doctors initially
    axios.get('http://localhost:3000/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors', error);
      });
  }, []);

  useEffect(() => {
    // Fetch doctors based on searchTerm
    if (searchTerm !== '') {
      axios.get(`http://localhost:3000/api/doctors/search?query=${searchTerm}`)
        .then(response => {
          setDoctors(response.data);
        })
        .catch(error => {
          console.error('Error fetching doctors', error);
        });
    } else {
      // Fetch all doctors if search term is empty
      axios.get('http://localhost:3000/api/doctors')
        .then(response => {
          setDoctors(response.data);
        })
        .catch(error => {
          console.error('Error fetching doctors', error);
        });
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAppointment = (doctor) => {
    setAppointmentDoctor(doctor);
    setShowModal(true);
  };

  {/*const handleAppointmentSubmit = () => {
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3000/api/appointments', {
      doctorId: appointmentDoctor.id,
      date: appointmentDate
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      alert('Appointment booked successfully!');
      setShowModal(false);
    })
    .catch(error => {
      console.error('Error booking appointment', error);
    });
  };*/}

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Default doctor component
  const defaultDoctor = {
    profileImage: '/src/assets/images/avtr.png',
    name: 'Dr. Zemouri Slim',
    specialty: 'General Medicine',
    hospital: 'Default Hospital',
    rating: 4.5,
    reviews: 100
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-creme2 min-h-screen relative">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded w-full"
        />
      </div>

      <div className="flex space-x-2 mb-4">
        <button className="px-4 py-2 bg-darkGreen2 text-white rounded">All</button>
        <button className="px-4 py-2 bg-lightGreen text-darkGreen1 rounded">Brain</button>
        <button className="px-4 py-2 bg-lightGreen text-darkGreen1 rounded">Cardio</button>
        <button className="px-4 py-2 bg-lightGreen text-darkGreen1 rounded">Eye</button>
        <button className="px-4 py-2 bg-lightGreen text-darkGreen1 rounded">Dentist</button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} onBookAppointment={handleAppointment} />
          ))
        ) : (
          <DoctorCard doctor={defaultDoctor} onBookAppointment={handleAppointment} />
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">Book Appointment with Dr. {appointmentDoctor.name}</h3>
            <select
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="p-2 border rounded w-full mb-4"
            >
              <option value="">Select a date</option>
              {appointmentDoctor.availability.map(date => (
                <option key={date} value={date}>{date}</option>
              ))}
            </select>
            <button
              className="bg-darkGreen2 text-white py-2 px-4 rounded hover:bg-greenHover"
              onClick={handleAppointmentSubmit}
            >
              Confirm Appointment
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded ml-2"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Link
        to="/user-home"
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-darkGreen2 text-white py-2 px-4 rounded-full shadow-lg hover:bg-greenHover"
      >
        Home
      </Link>
    </div>
  );
};

export default DoctorSearchPage;
