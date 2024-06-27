// src/pages/DoctorProfilePage.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './DoctorProfilePage.css';

const DoctorProfilePage = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [workDuration, setWorkDuration] = useState(30);

  const addAvailability = () => {
    setAvailableDates([...availableDates, { startTime, endTime, workDuration }]);
  };

  return (
    <div className="doctor-profile">
      <div className="profile-header">
        <img src="path_to_doctor_image" alt="Doctor" className="profile-image" />
        <div className="profile-info">
          <h2>Dr. John Doe</h2>
          <p>Cardio Specialist</p>
        </div>
      </div>
      <div className="calendar-section">
        <h3>Set Availability</h3>
        <div className="date-picker">
          <label>Start Time: </label>
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="date-picker">
          <label>End Time: </label>
          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="work-duration">
          <label>Work Duration (mins): </label>
          <input
            type="number"
            value={workDuration}
            onChange={(e) => setWorkDuration(e.target.value)}
          />
        </div>
        <button onClick={addAvailability} className="add-button">
          Add Availability
        </button>
      </div>
      <div className="availability-list">
        <h3>Available Times</h3>
        <ul>
          {availableDates.map((date, index) => (
            <li key={index}>
              {date.startTime.toLocaleString()} - {date.endTime.toLocaleString()} ({date.workDuration} mins)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
