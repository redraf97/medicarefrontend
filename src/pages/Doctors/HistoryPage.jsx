import React from 'react';
import DoctorLayout from '../../Layout/DoctorLayout'; // Importation de DoctorLayout

const HistoryPage = () => {
  return (
    <DoctorLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-darkGreen1">History</h1>
        <p>History content goes here.</p>
      </div>
    </DoctorLayout>
  );
};

export default HistoryPage;
