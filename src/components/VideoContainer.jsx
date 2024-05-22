import React, { useEffect } from "react";
import axios from "axios";
import { API_KEY, YOUTUBE_VIDEO_API } from "../constant/YouTube";
import VideoCart from "./VideoCart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setHomeVideo } from "../store/appSlice";

const VideoContainer = () => {
  const open = useSelector((store) => store.app.open);
  const video = useSelector((store) => store.app.video);
  const category = useSelector((store) => store.app.category);
  // const {video,category} = useSelector((store) => store.app);   //distructuring
  const dispatch = useDispatch();

  // //whenever you are fetching data or Api/Network call you should always use useEffect.
  // const fetchingVideo = async () => {
  //   try {
  //     const res = await fetch(YOUTUBE_VIDEO_API);
  //     const result = await res.json();
  //     console.log(result.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchingVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      dispatch(setHomeVideo(res.data.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );

      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchingVideo();
    } else {
      fetchVideoByCategory(category);
    }
  }, [category]);

  return (
    <div
      className={`gap-3 my-5 w-auto ${
        open
          ? "grid grid-cols-1  md:grid-cols-3"
          : "grid grid-cols-1 md:grid-cols-4 "
      }`}
    >
      {video.map((item) => (
        <Link
          to={`/watch?v=${
            typeof item.id === "object" ? item.id.videoId : item.id
          }`}
          key={typeof item.id === "object" ? item.id.videoId : item.id}
        >
          <VideoCart item={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
