import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopHome from '../components/all/home/TopHome';
import Services from '../components/all/home/Service';
import Specialities from '../components/all/home/Specialities';
import { Link } from 'react-router-dom';
import { faStethoscope, faUserNurse, faPrescriptionBottleMedical, faSyringe } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-creme2 flex flex-col justify-between">
      <Header />

      <div className="flex-grow">
        <div className="w-full pl-6 pt-16 pb-[70px]">
          <div className="top">
            <TopHome />
          </div>
          
          <div className="mt-8">
        <h3 className="text-lg font-semibold text-darkGreen2">Services</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <Link to="/login" className="bg-lightGreen text-darkGreen1 p-4 rounded shadow-md hover:bg-greenHover">
            <h4 className="font-bold">Medicine</h4>
            <p>Reserve your day with the best services now</p>
          </Link>
          <Link to="/login" className="bg-lightGreen text-darkGreen1 p-4 rounded shadow-md hover:bg-greenHover">
            <h4 className="font-bold">Nursing</h4>
            <p>Care services provided at home</p>
          </Link>
          <Link to="/login" className="bg-lightGreen text-darkGreen1 p-4 rounded shadow-md hover:bg-greenHover">
            <h4 className="font-bold">Pharmacy</h4>
            <p>Get your medications delivered to your door</p>
          </Link>
        </div>
      </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
