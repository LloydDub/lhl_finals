//with @dyoung4747

import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo4 from "../../images/logo4.png";

const NavItems = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Just Minted",
    url: "/just_minted",
  },
  {
    title: "Members",
    url: "/members",
  },
  {
    title: "Mint",
    url: "/about",
  },
];

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

export default function NavBar() {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* temp logo4 */}
        <img src={logo4} alt="logo4" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <div className=" flex space-x-4 text-white md:flex hidden ">
          <li>About</li>

          <li>
            <a href="#just_minted"> Just Minted</a>
          </li>

          <li>Members</li>

          <li className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
            <a href="#sign_up">Sign Up</a>
          </li>
        </div>

        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <a href="http://localhost:3001/">
            <li>MINT!</li>
          </a>
        </li>
      </ul>
    </nav>
  );
}
