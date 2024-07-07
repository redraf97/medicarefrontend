import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    <div className='flex w-full justify-around items-center bg-white h-[55px] rounded-tl-20 rounded-tr-20 shadow-panelShadow fixed bottom-0 z-40'>
      {navLinks.map((navLink, index) => (
        <React.Fragment key={index}>
          <NavLink 
            to={navLink.path} 
            className={(navClass) => 
              navClass.isActive
                ? 'text-blueketba text-[18px] hover:text-bluefoot h-[35px] w-[35px] flex justify-center items-center'
                : 'text-blueketba text-[18px] hover:text-bluefoot h-[35px] w-[35px] flex justify-center items-center'
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
}

export default UserButtomNavBar;
