import React, { useState } from 'react';
import image from '../../../assets/images/doctor-img01.png';
import ServiceDetails from '../../../components/nurseProfile/NurseWork/ServiceDetails';
import { faRoad, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import RateComp from '../../../components/UserProfile/serviceEnd/RateComp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EndWork = () => {
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const navigate = useNavigate();

  const send = () => {
    axios.put("http://localhost:3000/nurses/profile/rate-patient", {
      rating: stars,
      comment,
      patientName: "rafik" // Change the patientName dynamically
    }, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      console.log(res.data);
      navigate('/Nurse-work');
    }).catch(err => {
      console.log("from rating axios err :", err);
    });
  }

  return (
    <div className='flex flex-col items-center pt-24 px-3 gap-4 w-full flex-grow pb-[70px]'>
      <p className="text-blueketba font-[600]">thank you houssam moussaoui</p>
      <div className="servicenurse flex justify-between items-center mt-6 gap-2 w-full">
        <div className="left flex items-center gap-2">
          <img src={image} className="w-[60px] rounded-20" />
          <span className="text-blueketba font-[500]">rafik zemouri</span>
        </div>
        <span className="">500 DZD</span>
      </div>
      <hr className="border-t-1 border-blueketba w-full mt-6" />
      <div className="rate w-full flex-1 mt-6 flex flex-col items-center justify-between">
        <p className="text-sm text-blueketba self-start">your feedback is important to us</p>
        <div className="starsRate">
          <RateComp stars={stars} setStars={setStars} sentence={"How did you find rafik?"} />
        </div>
        <div className="commentAndConfirme w-full flex flex-col gap-4">
          <input type="text" className="appearance-none outline-none bg-[#e7e6ea] text-sm py-3 rounded-[10px] px-4 focus:ring-2 focus:ring-blueketba" value={comment} placeholder="add a comment" onChange={(e) => setComment(e.target.value)} />
          <button className="bg-blueketba text-white rounded-50 text-sm py-3" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default EndWork;
