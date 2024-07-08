import React from 'react';
import { NavLink } from 'react-router-dom';
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
    <div className='flex w-full justify-around items-center h-[55px] rounded-full fixed bottom-0 z-40'>
      {navLinks.map((navLink, index) => (
        <React.Fragment key={index}>
          <NavLink
            to={navLink.path}
            className={(navClass) =>
              navClass.isActive
                ? 'text-white text-[18px] '
                : 'text-white text-[18px] '
            }
          >
            <div className='bg-blueketba shadow-2xl rounded-full p-2'>
              {navLink.icon}
            </div>
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NurseButtomNav;
