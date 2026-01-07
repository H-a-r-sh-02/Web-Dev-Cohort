import axios from "../../api/axiosconfig";
import { loadProduct } from "../reducers/productSlice";

export const getProduct = (product) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const createProduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(getProduct());
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
export const updateProduct = (id, product) => async (dispatch, getState) => {
  try {
    await axios.patch(`/products/${id}`, product);
    dispatch(getProduct());
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(getProduct());
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
