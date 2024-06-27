import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DirectionPage from "../pages/DirectionPage";
import Home from "../pages/Home";

// Nurse Pages
import NurseInfosPage from "../pages/Nurses/NurseInfosPage";
import NurseWorkPage from "../pages/Nurses/nurseWorkPages/NurseWorkPage";
import AcceptingWork from "../pages/Nurses/nurseWorkPages/acceptingWork";
import NurseWorkLayout from "../Layout/nurse profile/NurseWorkLayout";
import RecievingRequest from "../pages/Nurses/nurseWorkPages/RecievingRequest";
import EndWork from "../pages/Nurses/nurseWorkPages/EndWork";

// User Pages
import UserLayout from "../Layout/UserLayout";
import UserProfileInfos from "../pages/User/UserProfileInfosPage";
import AskingForNurse from "../pages/User/AskingForNursePage";
import SetPosition from "../pages/User/SetPositionPage";
import ServiceEnd from "../pages/User/ServiceEndPage";
import ThankYouPage from "../pages/User/ThankYouPage";
import NurseResultPage from "../pages/User/NurseResultPage";
import AcceptedServicePage from "../pages/User/AcceptedServicePage";
import TestPage from "../pages/User/TestPage";
import MapPage from "../pages/User/MapPage";

// Doctor Pages
import DoctorProfilePage from "../pages/Doctors/DoctorProfilePage";
import SettingsPage from '../pages/Doctors/SettingsPage';
import HistoryPage from '../pages/Doctors/HistoryPage';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<DirectionPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      
      {/* Nurse Routes */}
      <Route path="/Nurse-Home" element={<NurseWorkLayout><Home /></NurseWorkLayout>} />
      <Route path="/Nurse-Profile" element={<NurseWorkLayout><NurseInfosPage /></NurseWorkLayout>} />
      <Route path="/Nurse-work" element={<NurseWorkLayout><NurseWorkPage /></NurseWorkLayout>} />
      <Route path="/Nurse-recieving" element={<NurseWorkLayout><RecievingRequest /></NurseWorkLayout>} />
      <Route path="/Nurse-accepting" element={<NurseWorkLayout><AcceptingWork /></NurseWorkLayout>} />
      <Route path="/Nurse-endWork" element={<NurseWorkLayout><EndWork /></NurseWorkLayout>} />
      
      {/* User Routes */}
      <Route path="/User-Home" element={<UserLayout><Home /></UserLayout>} />
      <Route path="/User-Profile" element={<UserLayout><UserProfileInfos /></UserLayout>} />
      <Route path="/User-asking" element={<UserLayout><AskingForNurse /></UserLayout>} />
      <Route path="/User-set-position" element={<UserLayout><SetPosition /></UserLayout>} />
      <Route path="/User-map" element={<UserLayout><MapPage /></UserLayout>} />
      <Route path="/User-result" element={<UserLayout><NurseResultPage /></UserLayout>} />
      <Route path="/User-accepted" element={<UserLayout><AcceptedServicePage /></UserLayout>} />
      <Route path="/User-service-end" element={<UserLayout><ServiceEnd /></UserLayout>} />
      <Route path="/User-thanks" element={<UserLayout><ThankYouPage /></UserLayout>} />
      <Route path="/User-test" element={<UserLayout><TestPage /></UserLayout>} />
      
      {/* Doctor Routes */}
      <Route path="/doctor-profile" element={<DoctorProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/" element={<DoctorProfilePage />} /> 
    </Routes>
  );
};

export default Routers;
