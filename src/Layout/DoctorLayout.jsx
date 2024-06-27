import React from 'react';
import DoctorFooter from '../components/Doctor/DoctorFooter';

const DoctorLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen pb-20"> {/* Added padding bottom to accommodate the footer */}
      {children}
      <DoctorFooter />
    </div>
  );
};

export default DoctorLayout;
