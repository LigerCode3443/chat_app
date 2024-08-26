import s from "./Register.module.scss";

import { useForm } from "react-hook-form";

const Register = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={s.register}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <p>Register</p>
        <label className={s.label}>
          <span>Name:</span>
          <input type="text" {...register("username")} />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input type="text" {...register("email")} />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input type="text" {...register("password")} />
        </label>

        <button className={s.btnRegister}>Register</button>
      </form>
    </div>
  );
};
export default Register;
