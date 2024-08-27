import ChatMessage from "../../components/ChatMessage/ChatMessage";
import s from "./Chat.module.scss";
import NavBar from "../../components/NavBar/NavBAr";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const Chat = () => {
  const user = useSelector(selectUser);
  const [currentChat, setCurrentChat] = useState();
  const [socket, setSocket] = useState();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  useEffect(() => {
    setSocket(io("ws://localhost:3000"));
    // socket?.on("getMessage", (data) => {
    //   setArrivalMessage({
    //     sender: data.senderId,
    //     text: data.text,
    //     createdAt: Date.now(),
    //   });
    // });
  }, []);

  useEffect(() => {
    socket?.emit("addUser", user._id);
    socket?.on("getUsers", (users) => {
      console.log(users);
    });
  }, [socket, user]);

  return (
    <div className={s.wrapper}>
      <NavBar setCurrentChat={setCurrentChat} />
      <ChatMessage
        currentChat={currentChat}
        socket={socket}
        arrivalMessage={arrivalMessage}
      />
    </div>
  );
};
export default Chat;
