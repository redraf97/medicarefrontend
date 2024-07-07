import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCalendarAlt, faEnvelopeOpen, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NurseButtomNav = () => {
  const navLinks = [
    {
      title: 'Nurse-parameters',
      path: '/Nurse-Parameters',
      icon: <FontAwesomeIcon icon={faCog} />,
    },
    {
      title: 'messages',
      path: '/Nurse-Messages',
      icon: <FontAwesomeIcon icon={faEnvelopeOpen} />
    },
    {
      title: 'Work',
      path: '/Nurse-work',
      icon: <FontAwesomeIcon icon={faCalendarAlt} />
    },
    {
      title: 'Profile',
      path: '/Nurse-Profile',
      icon: <FontAwesomeIcon icon={faUserCircle} />
    },
  ];

  return (
    <div className='flex w-full justify-around items-center bg-white h-[55px] rounded-full shadow-panelShadow fixed bottom-0 z-40'>
      {navLinks.map((navLink, index) => (
        <React.Fragment key={index}>
          <NavLink
            to={navLink.path}
            className={(navClass) =>
              navClass.isActive
                ? 'text-blueketba text-[18px] hover:text-bluefoot h-[35px] w-[35px] flex justify-center items-center rounded-50'
                : 'text-blueketba text-[18px] hover:text-bluefoot h-[35px] w-[35px] flex justify-center items-center rounded-50'
            }
          >
            {navLink.icon}
          </NavLink>
          {index < navLinks.length - 1 && (
            <div className='border-r h-[25px] mx-2'></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NurseButtomNav;
