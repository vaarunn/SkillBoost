import React, { useState } from "react";

const courses = [
  {
    id: 1,
    category: "Web Development",
  },
  {
    id: 2,
    category: "App Development",
  },
  {
    id: 3,
    category: "Machine Learning",
  },
  {
    id: 4,
    category: "AI",
  },
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="flex gap-8">
        {courses.map((course) => {
          const { id, category } = course;
          return (
            <div key={id} className="flex">
              <button
                onClick={() => setKeyword(category)}
                className="bg-red-200"
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
