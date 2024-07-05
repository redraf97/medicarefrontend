import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-darkGreen1 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 MEDIcare. All rights reserved.</p>
          <a href="/contact-us" className="text-sm hover:underline">Contact Us</a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
