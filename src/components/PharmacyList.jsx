import React, { useState, useEffect } from 'react';
import PharmacyItem from './PharmacyItem';

const PharmacyList = () => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    // Données fictives
    const fakeData = [
      {
        id: 1,
        name: 'Pharmacie boussekine',
        isOpen: true,
        address: 'boussekine, setif',
        phone: '+213 0000000'
      },
      {
        id: 2,
        name: 'Pharmacie les remparts ',
        isOpen: false,
        address: 'les remparts, setif',
        phone: '+213 1111111'
      },
      {
        id: 3,
        name: 'Pharmacie langar',
        isOpen: true,
        address: 'LANGAR',
        phone: '+213 2222222'
      }
    ];
    setPharmacies(fakeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-creme2 min-h-screen">
      <h2 className="text-2xl font-bold text-blueketba mb-4">Liste des Pharmacies</h2>
      {pharmacies.map(pharmacy => (
        <PharmacyItem key={pharmacy.id} pharmacy={pharmacy} />
      ))}
    </div>
  );
};

export default PharmacyList;
