import React from 'react';
import DoctorLayout from '../../Layout/DoctorLayout'; // Importation de DoctorLayout

const SettingsPage = () => {
  return (
    <DoctorLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-darkGreen1">Settings</h1>
        <p>Settings content goes here.</p>
      </div>
    </DoctorLayout>
  );
};

export default SettingsPage;
