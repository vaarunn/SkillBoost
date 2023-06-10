import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../assets/skillboost.png";
import { Link } from "react-router-dom";
import { links, socialIcons } from "../util/data";

import ThemeToggle from "./ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../redux/slices/userSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();

  const [active, setActive] = useState(null);

  const toogleSidebar = () => {
    setNav(!nav);
  };

  const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(checkUser());
  // }, []);

  return (
    <div className=" flex p-4 items-center justify-between md:px-20">
      <Link to="/">
        <img className="w-16" src={logo} alt="skill-boost" />
      </Link>

      <div className="flex items-center ">
        <ul className="hidden lg:flex gap-8 p-8 ">
          {user?.user &&
            links.map((link) => {
              const { id, title, url } = link;
              return (
                <Link key={id} to={url}>
                  <div
                    onClick={() => setActive(id)}
                    className={
                      active == id
                        ? "bg-secondary rounded-xl p-2 border-l-4 border-r-4 border-accent"
                        : "p-2"
                    }
                  >
                    <li className="text-primary  uppercase hover:text-accent">
                      {title}
                    </li>
                  </div>
                </Link>
              );
            })}
        </ul>

        <div>
          <ThemeToggle />
        </div>
        <div className="cursor-pointer lg:hidden p-8" onClick={toogleSidebar}>
          <GiHamburgerMenu size={30} />
        </div>

        {user?.user?.name ? (
          <div>
            <Link to="/profile">
              <button className="button-input">Profile</button>
            </Link>
            <Link to="/disclaimer">
              <button className="button-input">Disclaimer</button>
            </Link>
          </div>
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
            ? " fixed right-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-full bg-primary  p-10  ease-in duration-700 z-10 border-l border-accent"
            : " bg-primary top-0 fixed right-[-250%]  p-10 ease-in duration-700  z-10 border-l border-accent"
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
            {user?.user?.name && (
              <ul className="uppercase">
                {links.map((link) => {
                  const { id, title, url } = link;
                  return (
                    <Link key={id} to={url} onClick={toogleSidebar}>
                      <li className="py-4 border-b border-gray-300 text-primary hover:text-[#0ea5e9] font-poppy">
                        {title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}

            {user?.user?.name ? (
              <div>
                <Link to="/profile">
                  <button className="button-input">Profile</button>
                </Link>
                <Link to="/disclaimer">
                  <button className="button-input">Disclaimer</button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/register">
                  <button className="button-input" onClick={toogleSidebar}>
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="button-input" onClick={toogleSidebar}>
                    Login
                  </button>
                </Link>
              </div>
            )}

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

export default Navbar;
