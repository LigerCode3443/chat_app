import s from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          <p>Login</p>
          <label className={s.label}>
            <span>Login:</span>
            <input type="text" placeholder="Login" {...register("login")} />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <input
              type="text"
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
