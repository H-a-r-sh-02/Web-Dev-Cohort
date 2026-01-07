import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(createProduct(product));
    reset();
    navigate("/products");
  };

  return (
    <div className="flex justify-center w-full p-3 mt-8">
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="flex flex-col items-start w-1/2 text-zinc-300 gap-5 px-50 py-3"
      >
        <input
          {...register("image")}
          className="text-2xl font-thin outline-none border-b-1"
          type="url"
          placeholder="image url"
        />
        <input
          {...register("title")}
          className="text-2xl font-thin outline-none border-b-1"
          type="text"
          placeholder="Title"
        />
        <input
          {...register("price")}
          className="text-2xl font-thin outline-none border-b-1"
          type="number"
          placeholder="0.00"
        />
        <textarea
          {...register("description")}
          className="text-2xl font-thin outline-none border-b-1"
          placeholder="enter description here..."
        ></textarea>
        <input
          {...register("category")}
          className="text-2xl font-thin outline-none border-b-1"
          type="text"
          placeholder="Category"
        />
        <button className="text-lg px-2 py-1 bg-blue-600 rounded text-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
