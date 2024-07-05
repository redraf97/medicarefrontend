import React from 'react';

const PharmacyItem = ({ pharmacy }) => {
  return (
    <div className={`p-4 mb-4 rounded shadow-md ${pharmacy.isOpen ? 'bg-green-100' : 'bg-red-100'}`}>
      <h3 className="text-xl font-bold">{pharmacy.name}</h3>
      <p className={`font-medium ${pharmacy.isOpen ? 'text-green-600' : 'text-red-600'}`}>
        {pharmacy.isOpen ? 'Ouvert' : 'Fermé'}
      </p>
      <p>{pharmacy.address}</p>
      <p>{pharmacy.phone}</p>
    </div>
  );
};

export default PharmacyItem;
