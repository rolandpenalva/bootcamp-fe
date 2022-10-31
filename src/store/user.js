import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Slice
const slice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});

export default slice.reducer;
//Action
const { loginSuccess, logoutSuccess } = slice.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      console.log("Testing .......");
      const data = {
        user: {
          user_name: username,
          user_password: password,
        },
      };
      const res = await axios.post("localhost:3001/login/", data);
      console.log("RESPONSE:::::: " + res);
      dispatch(loginSuccess({ username }));
    } catch (e) {
      return console.error(e.message);
    }
  };
export const logout = () => async (dispatch) => {
  try {
    //const res = await api.post("/api/auth/logout/")
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
