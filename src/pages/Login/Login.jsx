import s from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
    console.log(data);
    reset();
  };
  return (
    <div className={s.box}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <button className={s.btnGoogle}>
            <FaGoogle color="white" />
            <span> Google</span>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={s.right}>
          <p>Email:</p>
          <label className={s.label}>
            <span>Login:</span>
            <input type="text" placeholder="Login" {...register("email")} />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </label>
          <p className={s.text}>
            You don`t have an account?{" "}
            <Link to="/register" className={s.register}>
              Register
            </Link>
          </p>
          <button className={s.btnLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
