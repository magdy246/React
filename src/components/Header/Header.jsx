import {useState} from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const [Navbar, setNavbar] = useState(false)
  let changeBackGround = () =>{
    if(window.scrollY >= 2)
    {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener("scroll",changeBackGround)
  return (
    <>
      <nav className={Navbar ? 'bg-white fixed top-0 right-0 left-0 border-gray-200 main_color z-30 navbar move' : 'bg-white fixed top-0 right-0 left-0 border-gray-200 main_color z-30 navbar py-3'}>
        <div className="__marg">
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl md:text-4xl font-bold whitespace-nowrap dark:text-white">
            START FRAMEWORK
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border_color main_color">
              <li>
                <NavLink
                  to="About"
                  className="md:w-full w-fit block hov py-1 px-3 text-gray-900 rounded dark:text-white"
                  aria-current="page"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Portfolio"
                  className="md:w-full w-fit block hov py-1 px-3 text-gray-900 rounded md:border-0 dark:text-white"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Contact"
                  className="md:w-full w-fit block hov py-1 px-3 text-gray-900 rounded md:border-0 dark:text-white"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
