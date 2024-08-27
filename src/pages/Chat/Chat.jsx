import ChatMessage from "../../components/ChatMessage/ChatMessage";
import s from "./Chat.module.scss";
import NavBar from "../../components/NavBar/NavBAr";
import { useState } from "react";

const Chat = () => {
  const [currentChat, setCurrentChat] = useState();

  return (
    <div className={s.wrapper}>
      <NavBar setCurrentChat={setCurrentChat} />
      <ChatMessage currentChat={currentChat} />
    </div>
  );
};
export default Chat;
