import React from 'react';
import map from '../../assets/images/map.jpg';
import medicalPic from '../../assets/images/medicalpic4.jpg';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; // Import a plus icon from react-icons

const AskingForNurse = () => {
  const navigate = useNavigate();

  const askNurse = () => {
    navigate("/user-set-position");
    //localStorage.setItem('currentStep', '/User-set-position');
  }

  return (
    <div className='h-screen flex flex-col relative'>
      <div className="asking w-full flex-grow bg-creme2 shadow-panelShadow px-4 pt-16 pb-[50px] rounded-tl-20 rounded-tr-20 mt-[-40px] flex flex-col justify-between">
        <div className="p">
          <p className='font-roboto text-blueketba font-[600]'>Salut rafik</p>
          <p className='font-roboto text-sm text-writingGrey mt-1'>Tu as besoin d'un infirmier ou un service medicale ?</p>
        </div>
      </div>
      <div className="map w-full h-[100%]" style={{backgroundImage: `url(${encodeURI(medicalPic)})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <button 
          className='bg-bluefoot text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2'
          onClick={askNurse}
          aria-label="Demander un infirmier"
        >
          <FaPlus className='text-2xl' />
        </button>
        <span className='text-bluefoot font-roboto font-[600]'>Demander un infirmier</span>
      </div>
    </div>
  )
}

export default AskingForNurse;
