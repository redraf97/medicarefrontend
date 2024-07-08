import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { UserDataContext } from '../../Layout/UserLayout';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AcceptingNurseInfoComp from '../../components/UserProfile/accepting service/AcceptingNurseInfoComp';

const AcceptedServicePage = () => {
  const { selectedSubService, selectedService } = useContext(UserDataContext);
  const navigate = useNavigate();
  
  useEffect(() => { 
    window.socket.on("nurse ended work", (data) => { 
      console.log(data);
      navigate("/User-service-end");
    });
  }, [navigate]);

  return (
    <div className='min-h-screen flex flex-col pt-12 bg-creme2'>
      <span className='text-blueketba text-[20px] font-[600] text-center flex items-center pl-4 gap-6'>
        <FontAwesomeIcon icon={faRoad} className='text-blueketba border-1 border-blueketba p-2 w-[24px] h-[24px] rounded-50 shadow-panelShadow'/>
        location on map
      </span>
      <MapContainer center={[36.194179, 5.409578]} zoom={13} style={{ height: "55vh", width: "100%",  marginTop: "10px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <div className="asking w-full flex-grow bg-creme2 shadow-panelShadow px-4 pt-5 pb-[80px] rounded-tl-20 rounded-tr-20 mt-[-40px] flex flex-col items-center justify-between">
        <hr className="border-t-[3px] border-blueketba w-[70px] rounded-50 absolute left-[50%] translate-x-[-50%]" />
        <p className="mt-4 text-blueketba font-[700] text-center">{selectedService}</p>
        <p className="mt-1 text-writingGrey font-[600] text-center">{selectedSubService}</p>
        <AcceptingNurseInfoComp />
        <button className='w-full border-2 border-blueketba shadow-panelShadow text-blueketba py-3 rounded-20 mt-8'>
          cancel service
        </button>
      </div>
    </div>
  );
}

export default AcceptedServicePage;
