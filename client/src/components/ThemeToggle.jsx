import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { UserAuth } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = UserAuth();
  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-primary text-4xl mr-2" />
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon className="text-primary text-4xl mr-2" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
