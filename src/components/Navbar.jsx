import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiVideoOn } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  toggleSidebar,
  setSearchSuggetion,
} from "../store/appSlice";
import axios from "axios";
import { SEARCH_SUGGETION_API } from "../constant/YouTube";

const Navbar = () => {
  const searchSuggetion = useSelector((stote) => stote.app.searchSuggetion);
  const [input, setInput] = useState("");
  const [suggetion, setsuggetion] = useState(false);
  const dispatch = useDispatch();

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const togglehandler = () => {
    dispatch(toggleSidebar());
  };

  const openSuggestion = () => {
    setsuggetion(true);
  };

  const showSuggetion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGETION_API + input);
      console.log(res.data[1]);
      dispatch(setSearchSuggetion(res.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const displaySearch = (text) => {
    dispatch(setCategory(text));
    setsuggetion(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggetion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <div className="flex items-center justify-between px-5 py-2 sticky z-20 w-full bg-white">
        <div className="flex items-center cursor-pointer">
          <GiHamburgerMenu
            size={22}
            onClick={togglehandler}
            className="hidden md:block"
          />
          <img
            className="w-24 md:w-36 md:px-5 px-2"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="yt-logo"
          />
        </div>
        <div className="flex items-center w-[80%] md:w-[45%]">
          <input
            value={input}
            onFocus={openSuggestion}
            onChange={(e) => setInput(e.target.value)}
            className="outline-none border border-gray-400 rounded-l-2xl md:py-[8px] py-[6px] px-3 w-full"
            type="text"
            placeholder="Search"
          />
          <button
            onClick={searchVideo}
            className="border border-gray-400 rounded-r-2xl md:py-[8px] md:px-5 py-[6px] px-1 cursor-pointer"
          >
            <IoIosSearch size={24} />
          </button>

          {suggetion && searchSuggetion.length !== 0 && (
            <div className="absolute top-3 z-20 md:w-[30%] py-3 bg-white shadow-lg mt-12 rounded-lg border border-gray-200">
              <ul>
                {searchSuggetion.map((text, idx) => (
                  <div
                    onClick={() => displaySearch(text)}
                    className="flex items-center px-4 hover:bg-gray-200"
                    key={idx}
                  >
                    <IoIosSearch size={20} />
                    <li className="px-1 py-1 cursor-pointer text-md font-medium">
                      {text}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}

          <div className="hidden md:block">
            <div className="w-[52px] h-[40px] flex justify-center items-center rounded-fullbg-gray-200 cursor-pointer">
              <MdOutlineKeyboardVoice size={24} />
            </div>
          </div>
        </div>

        <div className="hidden  md:flex items-center  w-[15%] justify-evenly cursor-pointer">
          <CiVideoOn size={24} />
          <IoMdNotificationsOutline size={24} />
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbTVWm4itjxc6mtPZYA8T6Cvwewd7o7wotOhyEZZPew&s"
            size={38}
            round="{true}"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
