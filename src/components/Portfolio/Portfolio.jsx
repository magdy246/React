import React , { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import port1 from "./../../assets/images/port1.png";
import port2 from "./../../assets/images/port2.png";
import port3 from "./../../assets/images/port3.png";

export default function Portfolio() {
  const [src, setSrc] = useState("");

  let phoTo = (event) => {
    let clickPhoto = event.currentTarget.getAttribute("data-src");
    setSrc(clickPhoto);
  };

  const closeModal = () => {
    setSrc("");
  };

  return (
    <>
      <div className="about flex justify-center items-center h-full mt-24">
        <div>
          <div className="text-center pt-4">
            <h2 className="sec-color-text md:text-4xl text-2xl font-bold mb-4">
              PORTFOLIO COMPONENT
            </h2>
            <div className="flex items-center justify-center">
              <div className="line sec-color mr-3 h-px w-10"></div>
              <FontAwesomeIcon
                className="sec-color-text text-lg"
                icon={faStar}
              />
              <div className="line sec-color ml-3 h-px w-10"></div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-full">
            <div className="mb-8 px-6 flex flex-row flex-wrap">
              <div className="lg:w-1/3 md:w-1/2 w-full px-3 mt-6">
                <div className="relative rounded-xl overflow-hidden">
                  <div
                    className="lay cursor-pointer flex justify-center items-center absolute bottom-0 top-0 right-0 left-0 second-color opacity-0 hover:opacity-80 transition-opacity duration-500"
                    data-src={port1}
                    onClick={phoTo}
                  >
                    <FontAwesomeIcon
                      className="text-white text-7xl"
                      icon={faPlus}
                    />
                  </div>
                  <img className="photo w-full cursor-pointer" src={port1} alt="port" />
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-3 mt-6">
                <div className="relative rounded-xl overflow-hidden">
                  <div
                    className="lay cursor-pointer flex justify-center items-center absolute bottom-0 top-0 right-0 left-0 second-color opacity-0 hover:opacity-80 transition-opacity duration-500"
                    data-src={port2}
                    onClick={phoTo}
                  >
                    <FontAwesomeIcon
                      className="text-white text-7xl"
                      icon={faPlus}
                    />
                  </div>
                  <img className="photo w-full cursor-pointer" src={port2} alt="port" />
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-3 mt-6">
                <div className="relative rounded-xl overflow-hidden">
                  <div
                    className="lay cursor-pointer flex justify-center items-center absolute bottom-0 top-0 right-0 left-0 second-color opacity-0 hover:opacity-80 transition-opacity duration-500"
                    data-src={port3}
                    onClick={phoTo}
                  >
                    <FontAwesomeIcon
                      className="text-white text-7xl"
                      icon={faPlus}
                    />
                  </div>
                  <img className="photo w-full cursor-pointer" src={port3} alt="port" />
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-3 mt-6">
                <div className="relative rounded-xl overflow-hidden">
                  <div
                    className="lay cursor-pointer flex justify-center items-center absolute bottom-0 top-0 right-0 left-0 second-color opacity-0 hover:opacity-80 transition-opacity duration-500"
                    data-src={port1}
                    onClick={phoTo}
                  >
                    <FontAwesomeIcon
                      className="text-white text-7xl"
                      icon={faPlus}
                    />
                  </div>
                  <img className="photo w-full cursor-pointer" src={port1} alt="port" />
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-3 mt-6">
                <div className="relative rounded-xl overflow-hidden">
                  <div
                    className="lay cursor-pointer flex justify-center items-center absolute bottom-0 top-0 right-0 left-0 second-color opacity-0 hover:opacity-80 transition-opacity duration-500"
                    data-src={port2}
                    onClick={phoTo}
                  >
                    <FontAwesomeIcon
                      className="text-white text-7xl"
                      icon={faPlus}
                    />
                  </div>
                  <img className="photo w-full cursor-pointer" src={port2} alt="port" />
                </div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-3 mt-6">
                <div className="relative rounded-xl overflow-hidden">
                  <div
                    className="lay cursor-pointer flex justify-center items-center absolute bottom-0 top-0 right-0 left-0 second-color opacity-0 hover:opacity-80 transition-opacity duration-500"
                    data-src={port3}
                    onClick={phoTo}
                  >
                    <FontAwesomeIcon
                      className="text-white text-7xl"
                      icon={faPlus}
                    />
                  </div>
                  <img className="photo w-full cursor-pointer" src={port3} alt="port" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {src && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img src={src} alt="port" className="max-w-96 max-h-96 rounded-xl" />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-4 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
