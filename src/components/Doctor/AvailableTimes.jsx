// src/components/Doctor/AvailableTimes.jsx
import React from 'react';

const AvailableTimes = ({ availableDates }) => {
  return (
    <div className="bg-white shadow-md rounded p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-darkGreen1">Available Times</h3>
      <ul className="list-disc pl-5 text-darkGreen2">
        {availableDates.map((date, index) => (
          <li key={index} className="mb-2">
            {new Date(date.startTime).toLocaleString()} - {new Date(date.endTime).toLocaleString()} ({date.workDuration} mins)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableTimes;
