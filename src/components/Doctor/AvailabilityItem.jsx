import React from 'react';

const AvailabilityItem = ({ availability, onClick, deleteMode }) => {
  return (
    <div className={`bg-white shadow-md rounded p-4 mb-4 cursor-pointer relative ${deleteMode ? 'border-red-500 border-2' : ''}`} onClick={onClick}>
      <p className="text-darkGreen2">
        <strong>Day:</strong> {availability.day}
      </p>
      <p className="text-darkGreen2">
        <strong>Start Time:</strong> {availability.startTime}
      </p>
      <p className="text-darkGreen2">
        <strong>End Time:</strong> {availability.endTime}
      </p>
      <p className="text-darkGreen2">
        <strong>Work Duration:</strong> {availability.workDuration} mins
      </p>
      {deleteMode && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
          Click to Delete
        </span>
      )}
    </div>
  );
};

export default AvailabilityItem;
