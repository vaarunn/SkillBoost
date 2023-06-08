import React from "react";
import { footerCourses, socialIcons } from "../../util/data.js";
import { footerSkillShare } from "../../util/data.js";
import { footerResources } from "../../util/data.js";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="rounded-div md:px-20">
      <div className="text-center md:flex justify-between items-center my-8">
        <div>
          <h1 className="text-secondary font-bold my-8 text-md">Courses</h1>
          {footerCourses.map((item) => {
            const { id, name } = item;
            return (
              <div key={id}>
                <p className="hover:text-accent cursor-pointer my-4">{name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-secondary font-bold my-8 text-md">Skill Share</h1>
          {footerSkillShare.map((item) => {
            const { id, name } = item;
            return (
              <div key={id}>
                <p className="hover:text-accent cursor-pointer my-4 text-primary">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-secondary font-bold my-8 text-md">Resources</h1>
          {footerResources.map((item) => {
            const { id, name } = item;
            return (
              <div key={id}>
                <p className="hover:text-accent cursor-pointer my-4">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4 my-4 w-full sm-:w-[88%] justify-center">
        {socialIcons.map((icons) => {
          const { id, icon, url } = icons;

          return (
            <div
              key={id}
              className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
      <div className="my-8">
        <h1 className="text-center">
          Copyright © {currentYear} SkillShare | All Rights Reserved{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
