import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logInHandler = (user) => {
    dispatch(loginUser(user));
    navigate("/");
  };

  return (
    <div className="flex justify-center w-full p-3 mt-8">
      <form
        onSubmit={handleSubmit(logInHandler)}
        className="flex flex-col items-start w-1/2 text-zinc-300 gap-5 px-50 py-3"
      >
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
          Login User
        </button>
        <p>
          Don't have an account?
          <Link to={"/signup"} className="text-blue-600">
            {" "}
            signup{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
