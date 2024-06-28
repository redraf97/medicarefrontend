import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faHistory } from '@fortawesome/free-solid-svg-icons';

const DoctorFooter = () => {
  const navLinks = [
    {
      title: 'Settings',
      path: '/Doctor-settings',
      icon: <FontAwesomeIcon icon={faCog} />,
    },
    {
      title: 'History',
      path: '/Doctor-history',
      icon: <FontAwesomeIcon icon={faHistory} />,
    },
    {
      title: 'Profile',
      path: '/doctor-profile',
      icon: <FontAwesomeIcon icon={faUser} />,
    },
  ];

  return (
    <div className='flex w-full justify-around items-center bg-white h-[55px] rounded-tl-20 rounded-tr-20 shadow-panelShadow fixed bottom-0 z-40'>
      {navLinks.map((navLink, index) => (
        <NavLink 
          key={index} 
          to={navLink.path} 
          className={(navClass) => navClass.isActive ? 
            'text-darkGreen1 text-[18px] hover:text-greenHover h-[35px] w-[35px] flex justify-center items-center rounded-50' : 
            'text-darkGreen4 text-[18px] hover:text-greenHover'}
        >
          {navLink.icon}
        </NavLink>
      ))}
    </div>
  );
};

export default DoctorFooter;
