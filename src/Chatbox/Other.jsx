import React from "react";

const Other = ({ name, message, time }) => {
  return (
    <div className="other">
      <div className="other-chat-container">
        <div className="other-name">{name}</div>
        <div className="other-chat">
          <div className="other-message">{message}</div>
          <div className="other-time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Other;
