import { useEffect, useRef, useState } from "react";
import "./index.css";
import Mine from "./Mine";
import Other from "./Other";
import { db } from "../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const Chatbox = ({ name }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const lastMessage = useRef(null);

  const messageSend = async (e) => {
    e.preventDefault();
    
    const today = new Date();
    const time = today.getTime();
    if (message) {
      const messageData = { name, message, time };
      await addDoc(collection(db, "messages"), messageData);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scroll To Bottom Trigger");
  };

  useEffect(() => {
    onSnapshot(collection(db, "messages"), (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => doc.data()).sort((a, b) => a.time - b.time)
      );
    });

    scrollToBottom(); // call scrollToBottom on initial render
  }, [lastMessage]); // add lastMessage as a dependency to useEffect

  useEffect(() => {
    scrollToBottom(); // call scrollToBottom whenever messages state changes
  }, [messages]);

  return (
    <div className="chat-box">
      <div className="chat-header">
        <div className="chat-name">{name}</div>
      </div>
      <div className="chat-from-other">
        {messages.map((message, index) => {
          if (message.name === name)
            return (
              <Mine
                key={index}
                message={message.message}
                time={new Date(message.time).toLocaleTimeString()}
              />
            );
          else
            return (
              <Other
                key={index}
                name={message.name}
                message={message.message}
                time={new Date(message.time).toLocaleTimeString()}
              />
            );
        })}
        <div ref={lastMessage}></div>
      </div>
      <form className="message-input" onSubmit={messageSend}>
        <input
          type="text"
          className="message-box"
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="message-send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
