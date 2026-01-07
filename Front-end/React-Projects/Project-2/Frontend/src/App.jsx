import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
// import { getProduct } from "./store/actions/productActions";
import { currentUser } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);
  // const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(currentUser());
  }, [users]);

  // useEffect(() => {
  //   products.length == 0 && dispatch(getProduct());
  // }, [products]);

  return (
    <div className="w-full px-10 py-2 bg-zinc-800">
      <MainRoutes />
    </div>
  );
};

export default App;
