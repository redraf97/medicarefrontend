import React, { useRef, useContext } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NurseDataContext } from '../../../Layout/nurse profile/NurseWorkLayout';

const NurseWorkPageTop = () => {

  const { setIsWork, isTaken, setNurseLocation } = useContext(NurseDataContext);
  const switchStateRef = useRef(null);
  //let lat, long;

  const switchStateButton = () => {
  if (switchStateRef.current.classList.contains("active")) {
   
    axios.put("http://localhost:3000/nurses/profile/change-not-working", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      switchStateRef.current.classList.remove("active");// switched off
      toast.success(res.data.message);
      setIsWork(false);
    }).catch((err) => {
      console.log("axios err", err);
    });
    setIsWork(false);
  } else {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      axios.put("http://localhost:3000/nurses/profile/change-work-status", {
        location: [lat, long]
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => {
        switchStateRef.current.classList.add("active"); // switched on
        toast.success(res.data.message);
        setNurseLocation([lat, long]);
        setIsWork(true);
      }).catch((err) => { 
        console.log("axios err", err);
      });
    }, function(err) {
      console.log("geolocation err", err);
    });
  }
};



  return (
   
        <div ref={switchStateRef} onClick={switchStateButton}>
        <label className="toggle-btn ml-40">
            <input type="checkbox"/>
            <span className="toggle-text"></span>
          </label>
        </div>
      
  )
}

export default NurseWorkPageTop
