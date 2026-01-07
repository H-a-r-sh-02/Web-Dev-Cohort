import React, { useEffect, useState } from "react";
import axios from "../api/axiosconfig";
import { useDispatch, useSelector } from "react-redux";
import { loadLazyProduct } from "../store/reducers/productSlice";

const customFetchHook = () => {
     const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [hasMore, setHasMore] = useState(true);

    const fetchProducts = async () => {
        try {
          const res = await axios.get(
            `/products?_limit=6&_start=${products.length}`
          );
          if (res.data.length == 0) {
            setHasMore(false);
          } else {
            dispatch(loadLazyProduct(res.data));
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          setHasMore(false);
        }
      };

       useEffect(() => {
    fetchProducts();
  }, []);


  return { products, hasMore, fetchProducts};
};

export default customFetchHook;
