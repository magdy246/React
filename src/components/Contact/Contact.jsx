import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

  return (
    <>
      <div className="h-full mt-24">
        <div className="text-center pt-4">
          <h2 className="sec-color-text md:text-4xl text-2xl font-bold mb-4">
            CONTACT COMPONENT
          </h2>
          <div className="flex items-center justify-center">
            <div className="line sec-color mr-3 h-px w-10"></div>
            <FontAwesomeIcon className="sec-color-text text-lg" icon={faStar} />
            <div className="line sec-color ml-3 h-px w-10"></div>
          </div>
        </div>
        <div className="p-4 my-5 w-full">
          <div className="flex flex-col justify-center w-1/2 mx-auto">
            <div className="relative mb-6">
              <input
                id="username"
                className="peer py-3 my-4 w-full rounded-xl border-2 border-t-white border-b-gray-500 border-x-white focus:border-t-white focus:border-x-white focus:border-b-black focus:ring-0 focus:outline-none"
                type="text"
                placeholder="user name"
              />
              <label
                htmlFor="username"
                className="-z-10 absolute -left-2 bottom-6 translate-y-1/2 translate-x-2 transition-all duration-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-12 peer-focus:text-green-500"
              >
                user name :
              </label>
            </div>

            <div className="relative mb-6">
              <input
                id="age"
                className="peer py-3 my-4 w-full rounded-xl border-2 border-t-white border-b-gray-500 border-x-white focus:border-t-white focus:border-x-white focus:border-b-black focus:ring-0 focus:outline-none"
                type="text"
                placeholder="user age"
              />
              <label
                htmlFor="age"
                className="-z-10 absolute -left-2 bottom-6 translate-y-1/2 translate-x-2 transition-all duration-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-12 peer-focus:text-green-500"
              >
                user age :
              </label>
            </div>

            <div className="relative mb-6">
              <input
                id="email"
                className="peer py-3 my-4 w-full rounded-xl border-2 border-t-white border-b-gray-500 border-x-white focus:border-t-white focus:border-x-white focus:border-b-black focus:ring-0 focus:outline-none"
                type="email"
                placeholder="user email"
              />
              <label
                htmlFor="email"
                className="-z-10 absolute -left-2 bottom-6 translate-y-1/2 translate-x-2 transition-all duration-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-12 peer-focus:text-green-500"
              >
                user email :
              </label>
            </div>

            <div className="relative mb-6">
              <input
                id="password"
                className="peer py-3 my-4 w-full rounded-xl border-2 border-t-white border-b-gray-500 border-x-white focus:border-t-white focus:border-x-white focus:border-b-black focus:ring-0 focus:outline-none"
                type="password"
                placeholder="user password"
              />
              <label
                htmlFor="password"
                className="-z-10 absolute -left-2 bottom-6 translate-y-1/2 translate-x-2 transition-all duration-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-12 peer-focus:text-green-500"
              >
                user password :
              </label>
            </div>

            <button
              type="submit"
              className="xl:w-1/5 lg:w-1/3 md:w-1/3 w-3/4 text-white bg-green-400 hover:bg-green-400 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-600 dark:active:bg-green-400"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
