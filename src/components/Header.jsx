import React, { useState } from "react";
import { Link, ScrollLink } from "react-scroll";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full max-w-7xl">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <span className="text-yellow-400 hover:text-white ">
              Biplov Acharya
            </span>
          </div>
          {/* mobile menu icons*/}
          <div
            onClick={() => setOpen(!open)}
            className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* Nav link items */}
          <ul
            className={` hover:cursor-pointer md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500  ease-in ${
              open ? "top-12" : "top-[-500px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7 font-semibold"
              >
                <Link
                  className="text-white transition-all duration-500 hover:text-yellow-400"
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
