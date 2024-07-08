import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNotesMedical, faCommentDots, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const UserButtomNavBar = () => {
  const navLinks = [
    {
      title: 'Home',
      path: '/User-Home',
      icon: <FontAwesomeIcon icon={faHome} />
    },
    {
      title: 'Messages',
      path: '/User-messages',
      icon: <FontAwesomeIcon icon={faCommentDots} />
    },
    {
      title: 'Ask for Nurse',
      path: '/User-asking',
      icon: <FontAwesomeIcon icon={faNotesMedical} />
    },
    {
      title: 'Profile',
      path: '/User-Profile',
      icon: <FontAwesomeIcon icon={faUserCircle} />
    }
  ];

  return (
    <div className='flex w-full justify-around items-center  h-[55px] rounded-tl-20 rounded-tr-20 fixed bottom-0 z-40'>
      {navLinks.map((navLink, index) => (
        <React.Fragment key={index}>
          <NavLink 
            to={navLink.path} 
            className={(navClass) => 
              navClass.isActive
                ? 'text-white text-[18px] hover:text-bluefoot'
                : 'text-white text-[18px] hover:text-bluefoot'
            }
          >
            <div className='bg-blueketba rounded-full p-2'>
              {navLink.icon}
            </div>
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
}

export default UserButtomNavBar;
