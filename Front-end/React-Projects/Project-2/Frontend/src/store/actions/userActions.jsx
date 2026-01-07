import axios from "../../api/axiosconfig";
import { loadUser, removeUser } from "../reducers/userSlice";

export const loginUser = (credentials) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${credentials.email}&password=${credentials.password}`
    );
    // console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
    dispatch(currentUser());
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};

export const currentUser = (credentials) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loadUser(user));
    else console.log("No user logged in");
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};

export const logOutUser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser());
  } catch (error) {
    console.error("Error logging in user:", error);
  }
};

export const registerUser = (userData) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", userData);
    console.log(res);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const updateUser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch(`/users/${id}`, user);
    // console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(currentUser());
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(logOutUser());
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
