import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import DirectionPage from '../pages/DirectionPage';
import Home from '../pages/Home';
import DoctorSearchPage from '../pages/User/DoctorSearchPage';
import UserMessagesPage from "../pages/User/UserMessagesPage";
import PharmacySelectionPage from '../pages/PharmacySelectionPage';
import LandingPage from '../pages/LandingPage';

// Nurse 
import NurseInfosPage from '../pages/Nurses/NurseInfosPage';
import NurseWorkPage from '../pages/Nurses/nurseWorkPages/NurseWorkPage';
import acceptingWork from '../pages/Nurses/nurseWorkPages/acceptingWork';
import NurseWorkLayout from '../Layout/nurse profile/NurseWorkLayout';
import RecievingRequest from '../pages/Nurses/nurseWorkPages/RecievingRequest';
import EndWork from '../pages/Nurses/nurseWorkPages/EndWork';
import NurseMessage from '../pages/Nurses/NurseMessage';
import NurseParametersPage from '../pages/Nurses/NurseParameters';

// User
import UserLayout from '../Layout/UserLayout';
import UserProfileInfos from '../pages/User/UserProfileInfosPage';
import AskingForNurse from '../pages/User/AskingForNursePage';
import SetPosition from '../pages/User/SetPositionPage';
import ServiceEnd from '../pages/User/ServiceEndPage';
import ThankYouPage from '../pages/User/ThankYouPage';
import NurseResultPage from '../pages/User/NurseResultPage';
import AcceptedServicePage from '../pages/User/AcceptedServicePage';
import TestPage from '../pages/User/TestPage';
import MapPage from '../pages/User/MapPage';

// Doctor
import DoctorProfilePage from '../pages/Doctors/DoctorProfilePage';
import SettingsPage from '../pages/Doctors/SettingsPage';
import HistoryPage from '../pages/Doctors/HistoryPage';
import PractitionerSignupPage from '../pages/PractitionerSignupPage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/register-prac" element={<PractitionerSignupPage />} />
      <Route path="/pharmacy-selection" element={<UserLayout><PharmacySelectionPage /></UserLayout>} />

      {/* Nurse */}
      <Route path="/Nurse-Profile" element={<NurseWorkLayout><NurseInfosPage /></NurseWorkLayout>} />
      <Route path="/Nurse-work" element={<NurseWorkLayout><NurseWorkPage /></NurseWorkLayout>} />
      <Route path="/Nurse-recieving" element={<NurseWorkLayout><RecievingRequest /></NurseWorkLayout>} />
      <Route path="/Nurse-accepting" element={<NurseWorkLayout><acceptingWork /></NurseWorkLayout>} />
      <Route path="/Nurse-endWork" element={<NurseWorkLayout><EndWork /></NurseWorkLayout>} />
      <Route path="/Nurse-messages" element={<NurseWorkLayout><NurseMessage /></NurseWorkLayout>} />
      <Route path="/Nurse-parameters" element={<NurseWorkLayout><NurseParametersPage /></NurseWorkLayout>} />



      {/* User */}
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
      <Route path="/User-messages" element={<UserLayout><UserMessagesPage /></UserLayout>} />

      {/* Doctor */}
      <Route path="/Doctor-search" element={<DoctorSearchPage />} />
      <Route path="/Doctor-profile" element={<DoctorProfilePage />} />
      <Route path="/Doctor-settings" element={<SettingsPage />} />
      <Route path="/Doctor-history" element={<HistoryPage />} />
    </Routes>
  );
};

export default Routers;
