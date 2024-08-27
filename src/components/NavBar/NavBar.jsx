import s from "./NavBar.module.scss";
import avatar from "../../assets/avatar.png";
import ChatInform from "../ChatInform/ChatInform";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { selectConversation } from "../../redux/conversation/selectors";
import { useEffect } from "react";
import { conversationThunk } from "../../redux/conversation/operations";

const NavBar = ({ setCurrentChat }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const conversation = useSelector(selectConversation);

  useEffect(() => {
    dispatch(conversationThunk(user?._id));
  }, [dispatch, user]);

  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <div className={s.navBox}>
          <div>
            <img src={avatar} alt="avatar" className={s.avatar} />
            <p>{user?.username}</p>
          </div>
          <button
            className={s.btnLogout}
            onClick={() => {
              dispatch(logoutThunk());
            }}
          >
            Logout
          </button>
        </div>
        <input placeholder="Search or start new chat" type="text" />
      </div>

      <p className={s.title}>Chats</p>
      {conversation.map((c) => (
        <div
          key={c._id}
          className={s.friend}
          onClick={() => {
            setCurrentChat(c);
          }}
        >
          <ChatInform conversation={c} user={user} />
        </div>
      ))}
    </div>
  );
};
export default NavBar;
