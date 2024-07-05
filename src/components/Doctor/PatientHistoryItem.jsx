import React from 'react';

const PatientHistoryItem = ({ patient }) => {
  const { firstName, lastName, date, time, status } = patient;

  return (
    <div className="border p-4 rounded-md shadow-md flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-bold">{firstName} {lastName}</h3>
        <p>{date} at {time}</p>
      </div>
      <div className={`text-white px-2 py-1 rounded ${status === 'completed' ? 'bg-green-500' : 'bg-red-500'}`}>
        {status}
      </div>
    </div>
  );
};

export default PatientHistoryItem;
