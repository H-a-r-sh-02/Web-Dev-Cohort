import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, logOutUser, updateUser } from "../../store/actions/userActions";

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const updateUserHandler = (user) => {
    dispatch(updateUser(users.id, user));
  };

  const logOutUserHandler = () => {
    dispatch(logOutUser());
    navigate("/login");
  }

  const deleteUserHandler = () => {
    dispatch(deleteUser(users.id));
    navigate("/login");
  };

  return users ? (
    <div className="w-full flex flex-col items-center gap-8 justify-center mt-15">
      <form
        onSubmit={handleSubmit(updateUserHandler)}
        className="flex flex-col items-start w-1/2 text-zinc-300 gap-5 px-50 py-3"
      >
        <input
          {...register("username")}
          className="text-2xl font-thin outline-none border-b-1"
          type="text"
          placeholder="User Name"
        />
        <input
          {...register("email")}
          className="text-2xl font-thin outline-none border-b-1"
          type="email"
          placeholder="User Email"
        />
        <input
          {...register("password")}
          className="text-2xl font-thin outline-none border-b-1"
          type="password"
          placeholder="******"
        />
        <div className="flex gap-5">
          <button className="text-lg px-2 py-1 bg-blue-600 rounded text-white">
            Update
          </button>
          <button type="button" onClick={deleteUserHandler} className="text-lg px-2 py-1 bg-red-600 rounded text-white">
            Delete
          </button>
          <button type="button" onClick={logOutUserHandler} className="text-lg px-2 py-1 bg-red-600 rounded text-white">
            Logout
          </button>
        </div>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
