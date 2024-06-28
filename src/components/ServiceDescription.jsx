import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceDescription = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4">
      <FontAwesomeIcon icon={icon} size="2x" className="text-darkGreen1 mb-2" />
      <h3 className="text-xl font-bold text-darkGreen2">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default ServiceDescription;
