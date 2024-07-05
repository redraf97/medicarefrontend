import React from 'react';

const DoctorCard = ({ doctor, onBookAppointment }) => {
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <div className="flex items-center mb-4">
        <img src={doctor.profileImage} alt={doctor.name} className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-blueketba">{doctor.name}</h4>
          <p className="text-blueketba">{doctor.specialty}</p>
        </div>
      </div>
      <p className="text-blueketba">{doctor.hospital}</p>
      <p className="text-blueketba">Rating: {doctor.rating} ({doctor.reviews} reviews)</p>
      <button
        className="mt-4 bg-blueketba text-white py-2 px-4 rounded hover:bg-bluefoot"
        onClick={() => onBookAppointment(doctor)}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
