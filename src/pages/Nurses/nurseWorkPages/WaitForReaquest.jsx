import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { NurseDataContext } from "../../../Layout/nurse profile/NurseWorkLayout";
import RecievingRequest from "./RecievingRequest";
import WaitUserConfirmation from "./WaitUserConfirmation";
import RejectedByUserPage from "./RejectedByUserPage";

const WaitForRequest = () => {
  const { setIsTaken, isTaken, setRequestData, isRejected, requestData, isPending } = useContext(NurseDataContext);
  const [isChoosen, setIsChoosen] = useState(false);

  useEffect(() => {
    window.socket.on('newRequest', (message, requestData) => {
      setIsTaken(true);
      setRequestData(requestData);
    });

    window.socket.on('u are choosen', (message, data) => {
      setIsTaken(true);
      setRequestData(data);
      setIsChoosen(true);
    });
  }, []);

  return (
    <>
      <div
        className={`main w-full flex-grow px-8 flex flex-col items-center ${isTaken ? 'bg-[#fffcfc]' : ''}`}
        style={isTaken ? { filter: "blur(3px) brightness(70%)", pointerEvents: "none" } : {}}
      >
        <div className="content flex flex-col items-center">
          <FontAwesomeIcon icon={faClock} className="text-blueketba text-[200px]" />
          <h1 className="text-2xl text-blueketba my-6">Waiting for Request</h1>
          <div className="loader"></div>
        </div>
      </div>

      {isTaken && (
        <div className="w-[80%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          {isPending ? (
            <WaitUserConfirmation />
          ) : isRejected ? (
            <RejectedByUserPage />
          ) : (
            <RecievingRequest isChoosen={isChoosen} setIsChoosen={setIsChoosen} />
          )}
        </div>
      )}
    </>
  );
};

export default WaitForRequest;
