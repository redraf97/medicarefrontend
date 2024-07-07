import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from "../../../Layout/UserLayout";
import { useNavigate } from "react-router-dom";



const PositionOptions = ({setUserLocation}) => {

  const [selectedOption, setSelectedOption] = useState();
  //const { setUserLocation } = useContext(UserDataContext);
  const navigate = useNavigate();

  const option1 = () => { 
    setSelectedOption("option1");
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }

  const option2 = () => { 
    setSelectedOption("option2");
    navigate("/User-map");
   }



  return (
    <div className="Options w-full flex flex-col items-start">

<div className={`option1 flex items-center gap-3  text-sm ${selectedOption === 'option1' ?  'text-blueketba' : 'text-bluefoot'}`}>
        <FontAwesomeIcon icon={faCrosshairs} className="" />
        <button 
          className={`w-full py-2 px-4 rounded-full text-sm ${selectedOption === 'option1' ? 'text-blueketba border-blueketba' : 'text-bluefoot border-bluefoot'} border-2 focus:outline-none`} 
          onClick={option1}
        >
          Utiliser ma position
        </button>
      </div>
      
      <div className={`option2 flex items-center gap-3  text-sm ${selectedOption === 'option2' ?  'text-blueketba' : 'text-bluefoot'}`}>
        <FontAwesomeIcon icon={faMap} className="" />
        <button 
          className={`w-full py-2 px-4 rounded-full text-sm ${selectedOption === 'option2' ? 'text-blueketba border-blueketba' : 'text-bluefoot border-bluefoot'} border-2 focus:outline-none`} 
          onClick={option2}
        >
          Selectionner sur le map
        </button>
      </div>
    </div>
  );
};

export default PositionOptions;
