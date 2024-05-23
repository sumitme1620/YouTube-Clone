import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constant/YouTube";
import Avatar from "react-avatar";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { BsEmojiSmile } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../store/chatSlice";

const Watch = () => {
  const [input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const getSingleVideos = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=IN&key=${API_KEY}`
      );

      setSingleVideo(res.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideos();
  }, [videoId]);

  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "Sumit",
        message: input,
      })
    );
    setInput("");
  };

  return (
    <div className="md:flex justify-between items-start w-full p-4">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 mx-1">
        <div className=" w-full h-[230px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
          <iframe
            className="rounded-lg w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="font-bold mt-2 md:text-lg">
          {singleVideo?.snippet?.title}
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-2">
          <div className="flex items-center justify-between w-full sm:w-1/2 lg:w-2/5">
            <div className="flex cursor-pointer items-center">
              <Avatar
                src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
                size={35}
                round={true}
              />
              <div>
                <h1 className="font-bold text-xs md:text-base ml-2">
                  {singleVideo?.snippet?.channelTitle}
                </h1>
              </div>
            </div>
            <button className="px-4 py-1 font-medium text-white bg-black rounded-full cursor-pointer">
              Subscribe
            </button>
          </div>
          <div className="flex items-center w-full sm:w-1/2 lg:w-3/5 justify-around mt-4 sm:mt-0 cursor-pointer">
            <div className="flex items-center bg-gray-200 px-1 lg:px-3 lg:py-[5px] rounded-full justify-between text-[10px] lg:text-base">
              <AiFillLike size={24} />
              <p className="font-bold ml-1">
                {Math.round(singleVideo?.statistics?.likeCount / 1000)}K
              </p>
              <span className="text-xl mx-1">|</span>
              <BiSolidDislike size={24} />
            </div>
            <div className="flex items-center font-bold bg-gray-200  px-1 lg:px-3 lg:py-1 rounded-full lg:gap-2 text-xs lg:text-l">
              <PiShareFatFill size={24} />
              Share
            </div>
            <div className="flex items-center font-bold bg-gray-200 px-1 lg:px-3 lg:py-1 rounded-full lg:gap-2 text-xs lg:text-lg">
              <TfiDownload size={24} />
              Download
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/3 xl:w-1/4 mx-1 mt-4 md:mt-0">
        <div className="border border-gray-300 rounded-t-lg">
          <div className="flex items-center justify-between p-3 font-medium">
            <h1>Top Chat</h1>
            <div className="flex items-center justify-around w-1/4">
              <BsThreeDotsVertical className="text-2xl" />
              <RxCross1 className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 overflow-y-auto h-[28rem] flex flex-col-reverse  overflow-x-hidden">
          <LiveChat />
        </div>
        <div className="border border-gray-300 p-4 rounded-b-lg">
          <div className="flex items-center justify-between">
            <Avatar
              src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
              size={40}
              round={true}
            />
            <div className="flex items-center border border-gray-500 pl-3 p-2 rounded-2xl w-3/4">
              <input
                className="outline-none w-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Chat..."
              />
              <BsEmojiSmile />
            </div>
            <button
              className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center"
              onClick={sendMessage}
            >
              <LuSendHorizonal size={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
