import s from "./ChatMessage.module.scss";
import avatar from "../../assets/avatar.png";
import { IoSendSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { messageThunk, sendMessageThunk } from "../../redux/message/operations";
import { selectMessage } from "../../redux/message/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { format } from "timeago.js";

const ChatMessage = ({ currentChat, socket, arrivalMessage }) => {
  const [newMessage, setNewMessage] = useState();

  const [messageArr, setMessageArr] = useState();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const message = useSelector(selectMessage);
  const scrollRef = useRef();

  // useEffect(() => {
  //   arrivalMessage &&
  //     currentChat?.members.includes(arrivalMessage.sender) &&
  //     setMessageArr((prev) => [...prev, ...message, arrivalMessage]);
  // }, [arrivalMessage, currentChat, message]);

  useEffect(() => {
    dispatch(messageThunk(currentChat?._id));
  }, [dispatch, currentChat]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    // const receiverId = currentChat.members.find(
    //   (member) => member !== user._id
    // );

    // socket?.emit("sendMessage", {
    //   senderId: user._id,
    //   receiverId,
    //   text: newMessage,
    // });

    dispatch(sendMessageThunk(message));
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <img src={avatar} alt="" />
        <p>{user.username}</p>
      </div>
      <div className={s.relative}>
        {currentChat ? (
          <div className={s.wrapperMessage}>
            {message.map((m) => {
              return (
                <div
                  className={
                    m?.sender !== user?._id ? s.boxMessage : s.boxMessageOwn
                  }
                  key={m?._id}
                  ref={scrollRef}
                >
                  <p>{m?.text}</p>
                  <span>{format(m?.createdAt)}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <span className={s.conversationId}>
            Open a conversation to start a chat.
          </span>
        )}

        <div className={s.search}>
          <div className={s.searchBox}>
            <input
              type="text"
              value={newMessage}
              placeholder="Type your message"
              onKeyPress={handleKeyPress}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubmit}>
              <IoSendSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
