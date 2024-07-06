import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPaperPlane, faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Statistique from "../../components/nurseProfile/profileInfos/Statistique";
import convertToLocalServerPath from "../../utils/photoPathChanging";
import axios from "axios";
import defaultProfilePic from "../../assets/images/nursepic.png"; // Import the default profile picture

const NurseInfosPage = () => {
  const [name, setName] = useState("Soundous Meddah");
  const [specialite, setSpecialite] = useState("Cardiology");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(defaultProfilePic); // Set the default profile picture
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
      setName(response.data.name || "Default Name");
      setSpecialite(response.data.specialite || "Default Speciality");
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setImage(convertToLocalServerPath(response.data.profilePicture) || defaultProfilePic); // Use the profile picture or the default one
      setRate(response.data.averageRating);
      setPatientClients(response.data.patientClients);
    })
    .catch((error) => {
      console.log("from profile error ", error);
    });
  }, []);

  return (
    <div className="min-h-screen bg-creme2 flex flex-col items-center mt-10"> {/* Added margin-top */}
      <div className="bg-white w-full max-w-4xl rounded-t-3xl shadow-lg p-6 flex">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mt-6"> {/* Added margin-top */}
          <img src={image} alt="Profile" className="object-cover h-full w-full" />
        </div>
        <div className="ml-6">
          <h1 className="text-3xl font-bold text-blueketba">{name}</h1>
          <p className="text-xl text-writingGrey">{specialite}</p>
          <p className="text-sm text-writingGrey flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blueketba mr-1" /> Boussekine
          </p>
          <div className="mt-4">
            <Statistique title={"Patients"} icon={faUsers} number={patientClients} />
            <Statistique title={"Liked"} icon={faHeart} number={100} />
            <Statistique title={"Rate"} icon={faStar} number={rate} />
          </div>
        </div>
      </div>
      <div className="bg-white w-full max-w-4xl rounded-b-3xl shadow-lg p-6 mt-6">
        <div className="text-center mb-6">
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-blueketba text-lg">About</h2>
          <p className="text-writingGrey text-sm mt-2">About the nurse.</p>
        </div>
      </div>
    </div>
  );
};

export default NurseInfosPage;
