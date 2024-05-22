import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({ item }) => {
  return (
    <div className="flex items-center gap-1 my-2">
      <div>
        <Avatar
          src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
          size={30}
          round={true}
        />
      </div>
      <div className="flex items-center gap-3">
        <h1 className="font-semibold">{item.name}</h1>

        <p className="text-sm">{item.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
