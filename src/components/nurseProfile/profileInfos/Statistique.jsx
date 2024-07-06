import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Statistique = ({ title, icon, number }) => {
  return (
    <>
      <div className="bg-white inline-flex flex-col gap-1 p-4 rounded-[15px] items-center flex-1">
        <p className="text-writingGrey text-[13px]">{title}</p>
        <span className="text-writingGrey">
          <span className="text-blueketba text-[20px] mr-2">
            <FontAwesomeIcon icon={icon} />
          </span>
          {number}
        </span>
      </div>
    </>
  );
};

export default Statistique;


