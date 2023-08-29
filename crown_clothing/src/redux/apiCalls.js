import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/api/auth/login", user);
     console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};