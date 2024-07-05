import React, { useState } from 'react';
import axios from 'axios';

const SetAvailability = ({ doctorId, onAddAvailability }) => {
  const [day, setDay] = useState('Monday');
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('17:00');
  const [workDuration, setWorkDuration] = useState(30);

  const handleAddAvailability = () => {
    const availabilityData = {
      day,
      startTime,
      endTime,
      workDuration
    };

    axios.post(`http://localhost:3000/api/doctors/${doctorId}/availability`, availabilityData)
      .then(response => {
        onAddAvailability(response.data);
      })
      .catch(error => {
        console.error('Error adding availability:', error);
      });
  };

  return (
    <div className="bg-white shadow-md rounded p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-blueketba">Set Availability</h3>
      <div className="mb-4">
        <label className="block text-blueketba">Day:</label>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="mt-1 p-2 border border-blueketba rounded-md w-full"
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-blueketba">Start Time:</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="mt-1 p-2 border border-blueketba rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-blueketba">End Time:</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="mt-1 p-2 border border-blueketba rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-blueketba">Work Duration (mins):</label>
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(e.target.value)}
          className="mt-1 p-2 border border-blueketba rounded-md w-full"
        />
      </div>
      <button onClick={handleAddAvailability} className="bg-blueketba text-white px-4 py-2 rounded-md">
        Add Availability
      </button>
    </div>
  );
};

export default SetAvailability;
