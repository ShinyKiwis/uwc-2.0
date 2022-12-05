import React from "react";
import { Userbar } from "../components";
import ChatStyle from "../styles/chat.module.css";

const ChatBubble = ({ username }) => {
  return (
    <div>
      <img src="/" alt="user avatar" />
      <div>
        <h2>{username}</h2>
        <span>MCP A need some help</span>
      </div>
    </div>
  );
};

const ChatView = () => {
  return (
    <div className={ChatStyle.chat_view}>
      <ChatBubble username="Alex Doe" />
    </div>
  );
};

const Chat = ({ user }) => {
  return (
    <div className={ChatStyle.container}>
      <Userbar user={user} />
      <ChatView />
    </div>
  );
};

export default Chat;
