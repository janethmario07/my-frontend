import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    // updateUser: (state, action) => {
    //   state.users = state.users.map((u) =>
    //     u._id === action.payload._id ? action.payload : u
    //   );
    // },

    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u._id !== action.payload);
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
