import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../assets/skillboost.png";
import { Link } from "react-router-dom";
import { AdminLinks, links, socialIcons } from "../util/Data";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

const AdminSidebar = () => {
  const [nav, setNav] = useState(false);

  const toogleSidebar = () => {
    setNav(!nav);
  };

  const { user } = useSelector((state) => state.user);

  return (
    <div className=" flex px-4 items-center justify-between md:px-20">
      <Link to="/">
        <img className="w-16" src={logo} alt="skill-boost" />
      </Link>

      {user?.user?.role === "admin" && (
        <Link to="/admin/users">
          <button className="button">Admin Panel</button>
        </Link>
      )}

      <div className="flex items-center ">
        <ul className="hidden md:flex gap-8 p-8 ">
          {AdminLinks.map((link) => {
            const { id, title, url } = link;
            return (
              <Link key={id} to={url}>
                <li className="text-primary  uppercase hover:text-accent">
                  {title}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="cursor-pointer md:hidden p-8" onClick={toogleSidebar}>
          <GiHamburgerMenu size={30} />
        </div>
        <div>
          <ThemeToggle />
        </div>

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

      {/* sidebar */}
      <div
        className={
          nav
            ? " fixed right-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-full bg-primary  p-10  ease-in duration-700 z-10 "
            : " bg-primary top-0 fixed right-[-250%]  p-10 ease-in duration-700  z-10"
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
              {links.map((link) => {
                const { id, title, url } = link;
                return (
                  <Link key={id} to={url} onClick={toogleSidebar}>
                    <li className=" py-4 border-b  border-gray-300 text-primary  hover:text-[#0ea5e9] font-poppy">
                      {title}
                    </li>
                  </Link>
                );
              })}
            </ul>
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
