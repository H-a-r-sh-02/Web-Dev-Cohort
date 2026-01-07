import React from "react";
import { updateUser } from "../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductTemplate = ({ product }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const addToCartHandler = (product) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const cartitem = copyUser.cart.findIndex(
      (c) => c?.product?.id == product.id
    );
    if (cartitem == -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[cartitem] = {
        product,
        quantity: copyUser.cart[cartitem].quantity + 1,
      };
    }
    dispatch(updateUser(copyUser.id, copyUser));
  };

  return (
    <div key={product.id} className="w-1/3 p-4 mb-5 text-center">
      <div className="bg-zinc-400 rounded-2xl p-5 h-full flex flex-col items-center justify-between">
        <img
          className="h-48 w-48 object-cover rounded-xl mb-4"
          src={product.image}
          alt=""
        />
        <h1 className="text-xl mt-2 font-semibold line-clamp-1">
          {product.title}
        </h1>
        <h1 className="text-sm mt-2 mb-2 text-zinc-800 line-clamp-2">
          {product.description.slice(0, 40)}...
        </h1>
        <div className="mx-auto">
          <h1 className="text-lg font-semibold my-2">
            Price: {product.price}/-Rs.
          </h1>
          <button
            onClick={() => addToCartHandler(product)}
            className="text-base px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors"
          >
            Add To Cart
          </button>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="text-base text-blue-800 "
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductTemplate;
