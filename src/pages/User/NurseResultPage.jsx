import React, { useContext } from 'react';
import Loading from '../../components/all/Loading';
import AcceptedRequest from './AcceptedRequestPage';
import NoNearbyNursePage from './NoNearbyNursePage';
import NearbyNurses from './NearbyNursesPage';
import { UserDataContext } from '../../Layout/UserLayout';

const NurseResultPage = () => {
  const { resStatus } = useContext(UserDataContext);

  if (resStatus === 0) return <Loading />;
  if (resStatus === 200) return <NearbyNurses />;
  if (resStatus === 201) return <NoNearbyNursePage />;
  return null;
}

export default NurseResultPage;
