import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../assets/skillboost.png";
import { Link } from "react-router-dom";
import { AdminLinks, socialIcons } from "../util/data";
import ThemeToggle from "./ThemeToggle";
import {
  checkUser,
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminSidebar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(null);

  const toogleSidebar = () => {
    setNav(!nav);
  };

  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <div className=" flex p-4 items-center justify-between md:px-20">
        <Link to="/">
          <img className="w-16" src={logo} alt="skill-boost" />
        </Link>

        <div>
          <ThemeToggle />
        </div>

        <div className="cursor-pointer  p-8" onClick={toogleSidebar}>
          <GiHamburgerMenu size={30} />
        </div>
      </div>

      <div
        className={
          nav
            ? " fixed right-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-full bg-primary  p-10  ease-in duration-700 z-10 border-l border-accent"
            : " bg-primary top-0 fixed right-[-250%]  p-10 ease-in duration-700  z-10 border border-accent"
        }
      >
        <div>
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="/" width="87" height="87"></img>
            </Link>
            <div>
              <ThemeToggle />
            </div>

            <div
              className="cursor-pointer text-primary"
              onClick={toogleSidebar}
            >
              <MdClose size={30} />
            </div>
          </div>

          <div>
            <p className="uppercase my-2 font-bold  text-xl">Skill Boost</p>
            <p className="text-accent">Skills Matter Bro</p>
          </div>
          <div>
            <ul className="uppercase ">
              {AdminLinks.map((link) => {
                const { id, title, url } = link;
                return (
                  <Link key={id} to={url} onClick={toogleSidebar}>
                    <div
                      onClick={() => setActive(id)}
                      className={
                        active == id
                          ? "bg-secondary rounded-xl p-2 border-t-4 border-b-4 border-accent"
                          : "p-2"
                      }
                    >
                      <li className=" py-2 border-b  border-gray-300 text-primary  hover:text-[#0ea5e9] font-poppy">
                        {title}
                      </li>
                    </div>
                  </Link>
                );
              })}
            </ul>

            <div onClick={toogleSidebar}>
              {user?.user?.name ? (
                <Link to="/profile">
                  <button className="button-input">Profile</button>
                </Link>
              ) : (
                <div className="hidden md:block">
                  <Link to="/register">
                    <button className="button-nav">Register</button>
                  </Link>
                  <Link to="/login">
                    <button className="button-nav">Login</button>
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-10 ">
              <p>Let's connect</p>
              <div className="flex items-center justify-between my-4 w-full sm-:w-[88%]">
                {socialIcons.map((icons) => {
                  const { id, icon, url } = icons;

                  return (
                    <div
                      key={id}
                      className="rounded-full text-black bg-button shadow-lg shadow-gray-200 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                    >
                      <a href={url}>{icon}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
