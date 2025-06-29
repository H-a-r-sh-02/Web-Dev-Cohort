import { useContext } from "react";
import { useForm } from "react-hook-form";
 import { toast } from 'react-toastify';
import { todoContext } from "./Wrapper";
import { nanoid } from "nanoid";

const Create = () => {
 const [todo, settodo] = useContext(todoContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (e) => {
    // e.preventDefault();
    e.isCompleted = false;
    e.id = nanoid();

    const copyTodos = [...todo];
    copyTodos.push(e);
    settodo(copyTodos);
    
      toast.success("Todo Created!");

    reset();
  };

  return (
    <div className="w-[45%] px-10 py-5">
      <h1 className="text-5xl font-thin mb-10">
        CREATE <span className="text-orange-400">TO-DO</span> LIST
      </h1>
      <br />
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", {required: "title can not be empty!"})}
          className="border-b w-full outline-none text-xl font-thin mb-2"
          type="text"
          placeholder="Create..."
        />
        {/* {errors && errors.title && errors.title.message && <small>{errors.title.message}</small>} */}
        <small className="text-lg font-thin text-red-400">{errors?.title?.message}</small>
        <br />
        <br />
        <button className="text-2xl px-10 py-2 border rounded-xl">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
