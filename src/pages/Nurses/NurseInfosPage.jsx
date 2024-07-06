import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPaperPlane, faUsers, faHeart, faStar, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Statistique from "../../components/nurseProfile/profileInfos/Statistique";
import convertToLocalServerPath from "../../utils/photoPathChanging";
import axios from "axios";
import image from "../../assets/images/doctor-img02.png";

const NurseInfosPage = () => {
  const [name, setName] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(0);
  const [patientClients, setPatientClients] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3000/nurses/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.setItem("userData", JSON.stringify(response.data));
      setName(response.data.name);
      setSpecialite(response.data.specialite);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setImage(convertToLocalServerPath(response.data.profilePicture));
      setRate(response.data.averageRating);
      setPatientClients(response.data.patientClients);
    })
    .catch((error) => {
      console.log("from profile error ", error);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen fade-in">
      <div className="relative">
        <div className="w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="bg-creme2 z-2 w-full rounded-t-20 shadow-panelShadow p-6 mt-[-50px] flex-grow">
        <div className="profileHeader flex justify-between items-center pr-8">
          <div className="infos flex flex-col gap-1">
            <p className="font-bold text-blueketba text-2xl">{name}</p>
            <p className="text-lg text-writingGrey">Nurse, {specialite}</p>
            <p className="ville text-sm text-writingGrey">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blueketba mr-1" /> Boussekine
            </p>
          </div>
          <button className="bg-blueketba text-white p-2 rounded-full shadow-md hover:bg-bluefoot">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
        <div className="Numbers mt-5 flex justify-between px-1 w-full gap-3">
          <Statistique title={"Patients"} icon={faUsers} number={patientClients} />
          <Statistique title={"Liked"} icon={faHeart} number={100} />
          <Statistique title={"Rate"} icon={faStar} number={rate} />
        </div>
        <div className="about mt-5">
          <p className="font-semibold text-blueketba text-lg">About</p>
          <p className="text-writingGrey text-sm">about the nurse.</p>
        </div>
      </div>
    </div>
  );
};

export default NurseInfosPage;