import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/appSlice";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Masala Films",
    "Web Development",
    "Mixes",
    "Live",
    "News",
    "T-Series",
    "Node.js",
    "Skills",
    "Alka Yagnik",
    "Thought",
    "Jubin Nautiyal",
    "Dramedy",
    "Sales",
    "Recently Uploaded",
    "Watched",
    "New to you",
  ];

  const [active, setactive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setactive(tag);
    }
  };

  return (
    <div className="flex w-full overflow-x-scroll no-scrollbar">
      {buttonList.map((buttonName, index) => (
        <div key={index}>
          <button
            onClick={() => {
              videoByTag(buttonName);
            }}
            className={`${
              active === buttonName
                ? "bg-slate-900 text-white"
                : "bg - gray - 200"
            } md:px-4 mx-2 px-2 py-1 font-medium text-xs md:text-base md:py-[6px] rounded-lg whitespace-nowrap`}
          >
            {buttonName}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
