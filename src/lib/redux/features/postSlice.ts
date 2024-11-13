import { callAPI } from "@/config/axios";
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [{}],
  reducers: {
    setPosts: (initialState, action) => {
      return [...action.payload];
    },
  },
});

// export actions
export const { setPosts } = postSlice.actions;

// export reducer
export default postSlice.reducer;

// call API function
export const getPostList = () => {
  return async (dispatch: any) => {
    try {
      const res = await callAPI.get("/posts");
      dispatch(setPosts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
