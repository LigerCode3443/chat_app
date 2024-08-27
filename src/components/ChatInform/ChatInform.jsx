import s from "./ChatInform.module.scss";
import avatar from "../../assets/avatar.png";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { chatApi } from "../../config/chatApi";

const ChatInform = ({ conversation, user }) => {
  const dispatch = useDispatch();
  const [userCurrent, setUserCurrent] = useState();
  useEffect(() => {
    const friendId = conversation?.members?.find((c) => {
      return c !== user._id;
    });
    const getUser = async () => {
      try {
        const res = await chatApi.get(`auth/${friendId}`);

        setUserCurrent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation, user, dispatch]);

  return (
    <li className={s.card}>
      <div className={s.box}>
        <img src={avatar} alt="avatar" />
        <div className={s.text}>
          <p>{userCurrent?.username}</p>
          <p>message</p>
        </div>
      </div>
      <p className={s.date}>date</p>
    </li>
  );
};
export default ChatInform;
