import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../constant/YouTube";
import Avatar from "react-avatar";

const VideoCart = ({ item }) => {
  const [ytIcon, setYtIcon] = useState("");
  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`
      );
      setYtIcon(res.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeChannelName();
  }, []);

  return (
    <div className="cursor-pointer my-3 w-full ">
      <img
        className="w-full rounded-lg"
        src={item.snippet.thumbnails.medium.url}
        alt="youtubecart"
      />
      <div>
        <div className="flex items-center mt-2">
          <Avatar
            src={ytIcon?.snippet?.thumbnails?.high?.url}
            size={40}
            round={true}
          />
          <div className="ml-2 ">
            <h1 className="font-bold">{item.snippet.title}</h1>
            <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
            <p className="text-sm">
              {(ytIcon?.statistics?.viewCount / 10000000).toFixed(1)}K views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
