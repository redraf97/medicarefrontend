import React, { useState, useEffect, useContext } from 'react';
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectService from '../../components/UserProfile/User asking/SelectService';
import PositionOptions from '../../components/UserProfile/User asking/PositionOptions';
import { UserDataContext } from '../../Layout/UserLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleMapComponent from '../../components/GoogleMapComponent';

const SetPosition = () => {
  const { setResStatus, setNurseList, setUserLocation, userLocation, selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices, setRequestData } = useContext(UserDataContext);
  const [isValidLocation, setIsValidLocation] = useState(false);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.put('http://localhost:3000/patients/profile/reset-patient', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => { })
      .catch(err => console.log("reseting patient err ", err));
  }, []);

  useEffect(() => {
    setIsValidLocation(userLocation && userLocation.lat !== null && userLocation.lng !== null);
  }, [userLocation]);

  const handleLocationSelect = (location) => {
    setUserLocation(location);
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyBTsS8u0Ddz2KpUIHerFyQ--Hp_emALrec`)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setAddress(data.results[0].formatted_address);
        } else {
          setAddress('Address not found');
        }
      })
      .catch(error => {
        console.error('Error fetching address:', error);
        setAddress('Error fetching address');
      });
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        handleLocationSelect(location);
      }, (error) => {
        console.error('Error getting location:', error);
        setAddress('Error getting location');
      });
    } else {
      setAddress('Geolocation not supported by this browser');
    }
  };

  const nearbyNurses = () => {
    navigate("/User-result");
    const token = localStorage.getItem('token');
    axios.post('http://localhost:3000/patients/profile/nearby-nurses', {
      userLocation: userLocation,
      service: selectedService,
      subService: selectedSubService
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setResStatus(res.status);
      setNurseList(res.data.nurseList);
setRequestData(res.data.requestData);
window.socket.emit('sendRequest', "chiheb", res.data.nurseListNames, res.data.requestData)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='bg-creme2 w-full min-h-screen flex flex-col items-center pt-12'>
      <p className='text-darkGreen2 font-[600] text-[20px]'>Personalisez votre demande</p>
      
      <p className='text-darkGreen2 font-[600] text-[20px]'>Personalise votre demande</p>

      <div className="service-position w-full px-8 buttomShadow mt-12 pb-8">
        <SelectService selectedService={selectedService} setSelectedService={setSelectedService} selectedSubService={selectedSubService} setSelectedSubService={setSelectedSubService} subServices={subServices} setSubServices={setSubServices} />
        <div className="position mt-6 w-full relative flex items-center">
          <FontAwesomeIcon icon={faMapPin} className='absolute text-darkGreen4 left-4' />
          <input type="text" placeholder='position' className='location appearance-none shadow-panelShadow rounded-20 text-sm py-2 pl-10 w-full outline-none text-darkGreen1 focus:ring-1 focus:ring-darkGreen4' value={address || ''} readOnly />
          <button onClick={handleUseMyLocation} className="ml-4 bg-darkGreen2 text-white py-2 px-4 rounded hover:bg-greenHover">Utiliser ma position</button>
        </div>
      </div>

      <GoogleMapComponent location={userLocation} onLocationSelect={handleLocationSelect} />

      <div className="taht w-full px-8 pb-[80px] flex flex-col relative items-center gap-9 flex-1 justify-between">
        <div className="positionOptions mt-6 w-full ">
          <PositionOptions setUserLocation={setUserLocation} />
        </div>

        <div className={`terminer w-full text-creme2 py-3 text-center ${isValidLocation && selectedService !== "" && selectedSubService !== "" ? 'bg-darkGreen4' : 'bg-gray-400'} rounded-[10px]`}>
          <button disabled={!(isValidLocation && selectedService !== "" && selectedSubService !== "")} onClick={nearbyNurses}>
            Terminer
          </button>
        </div>
      </div>
    </div>
  )
}

export default SetPosition;
