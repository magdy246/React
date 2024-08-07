import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Fapp from "./../../assets/images/Fapp.svg"

export default function Home() {
  return (
    <>
    <div className="home flex justify-center items-center h-screen second-color mt-14">
      <div className="text-center">
        <img className="w-full" src={Fapp} alt="react logo" />
        <div className="text-center pt-4">
          <h2 className="text-white text-3xl font-bold mb-4">
            START FRAMEWORK
          </h2>
          <div className="flex items-center justify-center mb-3">
            <div className="line bg-white mr-3 h-px w-10"></div>
            <FontAwesomeIcon className="text-white text-lg" icon={faStar} />
            <div className="line bg-white ml-3 h-px w-10"></div>
          </div>
        </div>
        <div className="text-white text-lg">
          Graphic Artist - Web Designer - Illustrator
        </div>
      </div>
    </div>
    </>
  );
}
