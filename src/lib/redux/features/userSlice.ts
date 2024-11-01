import { createSlice } from "@reduxjs/toolkit";
interface IUser {
  id: string;
  username: string;
  email: string;
  name: string;
}

const initialData: IUser = {
  id: "",
  name: "",
  username: "",
  email: "",
};

// define slice config to create function reducer and action
const userSlice = createSlice({
  name: "user",
  initialState: { ...initialData },
  reducers: {
    setSignIn: (initialState, action) => {
      console.log("CHECK ACTION REDUX FROM USER SIGNIN:", action);

      // store data to global store
      return { ...action.payload };
    },
    setSignOut: () => {
      // reset data in global store user reducer
      return { ...initialData };
    },
  },
});

// export action
export const { setSignIn, setSignOut } = userSlice.actions;

// export reducer
export default userSlice.reducer;
