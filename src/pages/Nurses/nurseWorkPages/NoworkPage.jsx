import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NoworkPage = () => {
  return (
    <div className="w-full flex flex-col items-center pt-40 px-4">
      <FontAwesomeIcon icon={faXmark} className="text-red-400 text-[200px] mb-4" />
      <span className="font-semibold text-blueketba text-2xl">
        Want to get back to work?
      </span>
      <span className="font-normal text-blueketba text-lg mt-2 text-center">
        Currently, you are not available. Please update your status on top of the page to start working again.
      </span>
    </div>
  );
};

export default NoworkPage;
