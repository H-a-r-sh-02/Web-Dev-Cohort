import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Signup = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(registerUser(user));
    reset();
    navigate("/login")
  };

  return (
    <div className="flex justify-center w-full p-3 mt-8">
      <form
        onSubmit={handleSubmit(signUpHandler)}
        className="flex flex-col items-start w-1/2 text-zinc-300 gap-5 px-50 py-3"
      >
        <input
          {...register("username")}
          className="text-2xl font-thin outline-none border-b-1"
          type="text"
          placeholder="HarshPandey"
        />
        <input
          {...register("email")}
          className="text-2xl font-thin outline-none border-b-1"
          type="email"
          placeholder="Harsh@gmail.com"
        />
        <input
          {...register("password")}
          className="text-2xl font-thin outline-none border-b-1"
          type="password"
          placeholder="*******"
        />
        <button className="text-lg px-2 py-1 bg-blue-600 rounded text-white">
          Signup
        </button>
        <p>
          Already have an account?
          <Link to={"/login"} className="text-blue-600">
            {" "}
            login{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
