import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const NoworkPage = () => {
  return (
    <div className="w-full flex flex-col items-center pt-40 px-4">
      <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-[200px] mb-4" />
      <span className="font-semibold text-blueketba text-2xl">
        Get back to work?
      </span>
      <span className="font-normal text-blueketba text-lg mt-2 text-center">
        You are not available
      </span>
    </div>
  );
};

export default NoworkPage;
