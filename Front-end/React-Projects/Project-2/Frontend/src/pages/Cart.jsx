import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const increment = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };

    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantity: copyUser.cart[index].quantity + 1,
    };
    console.log(copyUser);
    dispatch(updateUser(copyUser.id, copyUser));
  };

  const decrement = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 0) {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1,
      };
    } else {
      copyUser.cart.splice(index, 1);
    }
    console.log(copyUser);
    dispatch(updateUser(copyUser.id, copyUser));

  };

  const cartItems = users.cart.map((c, index) => {
    return (
      <li
        className="flex justify-between items-center text-zinc-300 mb-5 px-5 py-2 rounded bg-zinc-400/20"
        key={c.product.id}
      >
        <img
          className="mr-10 object-cover h-[8vmax] w-[8vmax] rounded-lg"
          src={c.product.image}
          alt=""
        />
        <span className="text-2xl">{c.product.title}</span>
        <span className="text-xl">{c.product.price}/- Rs.</span>
        <p>
          <button
            onClick={() => decrement(index, c)}
            className=" text-lg font-semibold px-3 bg-zinc-600 rounded"
          >
            -
          </button>
          <span className="mx-1"> {c.quantity} </span>
          <button
            onClick={() => increment(index, c)}
            className=" text-lg font-semibold px-[.6em] bg-zinc-600 rounded"
          >
            +
          </button>
        </p>
      </li>
    );
  });

  return <ul className="px-20 mt-10">{cartItems}</ul>;
};

export default Cart;
