import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const Feed = () => {
  return (
    <div className=" relative mx-3 overflow-x-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Feed;
