import React, { useState, useEffect } from 'react';
import PharmacyItem from './PharmacyItem';

const PharmacyList = () => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    // Données fictives
    const fakeData = [
      {
        id: 1,
        name: 'Pharmacie ta3 boussekine',
        isOpen: true,
        address: 'boussekine bayna',
        phone: 'derangement'
      },
      {
        id: 2,
        name: 'Pharmacie ta3 les remparts ',
        isOpen: false,
        address: 'les remparts',
        phone: 'mat3aytch rana msakrin'
      },
      {
        id: 3,
        name: 'Pharmacie langar',
        isOpen: true,
        address: 'flangar',
        phone: '80085'
      }
    ];
    setPharmacies(fakeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-creme2 min-h-screen">
      <h2 className="text-2xl font-bold text-darkGreen1 mb-4">Liste des Pharmacies</h2>
      {pharmacies.map(pharmacy => (
        <PharmacyItem key={pharmacy.id} pharmacy={pharmacy} />
      ))}
    </div>
  );
};

export default PharmacyList;
