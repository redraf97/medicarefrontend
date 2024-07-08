import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import map from "../../../assets/images/map.jpg";
import Distance from "../../../components/nurseProfile/recieving requests/Distance";
import CheckClientAndPrice from "../../../components/nurseProfile/recieving requests/CheckClientAndPrice";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSocket } from "../../../SocketContext";

const RecievingRequest = ({ isChoosen, setIsChoosen }) => {
  const { setIsTaken, nurseData, requestData, setRequestData, setIsPending } = useContext(NurseDataContext);
  const navigate = useNavigate();
  const socket = useSocket();
  const [service, setService] = useState("");
  const [subService, setSubService] = useState("");
  const [distance, setDistance] = useState("");
  const [price, setPrice] = useState("");
  const [patient, setPatient] = useState("");
  const [patientRate, setPatientRate] = useState("");

  useEffect(() => {
    if (!requestData) return;
    setService(requestData.service);
    setSubService(requestData.subService);
    setDistance(requestData.distance);
    setPrice(requestData.price);
    setPatient(requestData.patient);
    setPatientRate(requestData.patientRate);

    socket.on('newRequest', (message, data) => {
      console.log(message, data);
      // handle new request data
      setRequestData(data);
    });

    return () => {
      socket.off('newRequest');
    };
  }, [requestData, socket, setRequestData]);

  const accept = () => {
    const nurseData = JSON.parse(localStorage.getItem("userData"));
    axios.put("http://localhost:3000/nurses/profile/accept-request", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((response) => {
      if (!isChoosen) {
        socket.emit('acceptRequest', patient, {
          nurseName: nurseData.name,
          nurseRate: nurseData.averageRating,
          nurseLikes: 80,
          nurseSpecialite: nurseData.specialite,
          patientClients: nurseData.patientClients,
          price: 500
        });
        setIsPending(true);
      } else {
        socket.emit('accept custom request', patient);
        setIsChoosen(false);
        navigate('/Nurse-accepting');
      }
    }).catch((error) => {
      console.log("from recieving accept error ", error);
    });
  };

  const decline = () => {
    axios.put("http://localhost:3000/nurses/profile/refuse-request", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((response) => {
      if (!isChoosen) {
        setIsTaken(false);
        setRequestData(null);
      } else {
        setIsChoosen(false);
        setRequestData(null);
        socket.emit('refuse custom request', patient);
      }
    }).catch((error) => {
      console.log("from recieving decline error ", error);
    });
  };

  return (
    <div className="req w-full bg-white p-3 rounded-20 flex flex-col items-center gap-3">
      <div className="map w-full h-[200px] rounded-20" style={{ backgroundImage: `url(${encodeURI(map)})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <div className="infos flex flex-col items-center w-full">
        <hr className="border-t-[3px] border-blueketba w-[70px] rounded-50" />
        <p className=" mt-2 text-blueketba font-[600]">{service}</p>
        <span className=" mt-1 text-writingGrey">{subService}</span>
        <span className="mt-4"><Distance Distance={distance} /></span>
        <hr className=" w-full my-6 mb-8" />
        <CheckClientAndPrice price={price} patient={patient} patientRate={patientRate} />
        <div className="buttons flex justify-between w-full mt-8">
          <button className="text-blueketba py-2 rounded-[10px] border-2 border-blueketba w-[48%]" onClick={decline}>
            Decline
          </button>
          <button className="bg-blueketba text-white py-2 rounded-[10px] w-[48%]" onClick={accept}>
            accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecievingRequest;
