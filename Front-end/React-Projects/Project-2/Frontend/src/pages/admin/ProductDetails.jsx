import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProduct,
  updateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();

  const  users  = useSelector((state) => state.userReducer.users);
  const  products  = useSelector((state) => state.productReducer.products);

  const detailProduct = products.find((product) => product.id === id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: detailProduct?.image,
      title: detailProduct?.title,
      price: detailProduct?.price,
      description: detailProduct?.description,
      category: detailProduct?.category,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateProductHandler = (product) => {
    dispatch(updateProduct(id, product));
    navigate("/products");
  };
  const deleteProductHandler = () => {
    dispatch(deleteProduct(id));
    navigate("/products");
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 justify-center mt-15">
      {detailProduct ? (
        <div className="w-1/2 flex justify-between rounded-xl overflow-hidden">
          <img
            className="w-[30%] object-cover"
            src={detailProduct.image}
            alt=""
          />
          <div className="bg-white text-center w-[67%] p-3">
            <h1 className="text-4xl font-bold mb-4">{detailProduct.title}</h1>
            <p className="text-base mt-5">{detailProduct.description}</p>
            <div className="flex items-center justify-center gap-10 mt-15">
              <p className="text-base font-semibold">
                Price: {detailProduct.price}/-Rs.
              </p>
              <button className="text-lg text-white px-2 py-1 bg-blue-500 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        "Product not found"
      )}
      { users && users?.isAdmin &&
        <div>
          <form
            onSubmit={handleSubmit(updateProductHandler)}
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
            <div className="flex gap-5">
              <button className="text-lg px-2 py-1 bg-blue-600 rounded text-white">
                Update
              </button>
              <button
                onClick={deleteProductHandler}
                className="text-lg px-2 py-1 bg-red-600 rounded text-white"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      }
    </div>
  );
};

export default ProductDetails;
