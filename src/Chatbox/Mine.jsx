import React from "react";

const Mine = ({ message, time }) => {
  return (
    <div className="mine-chat-container">
      <div className="mine-chat">
      <div className="mine-message">{message}</div>
        <div className="mine-time">{time}</div>
      </div>
    </div>
  );
};

export default Mine;
