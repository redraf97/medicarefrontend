// src/components/Doctor/DoctorInfo.jsx
import React from 'react';

const DoctorInfo = ({ doctor }) => {
  return (
    <div className="flex items-center mb-6">
      <img src={doctor.image} alt="Doctor" className="w-24 h-24 rounded-full mr-6" />
      <div>
        <h2 className="text-3xl font-bold text-darkGreen1">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialty}</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
