import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
  },
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    },
//   updateRoom: (state, action) => {
//   state.rooms = state.rooms.map(room =>
//     room._id === action.payload._id ? action.payload : room
//   );
// },
    deleteRoom: (state, action) => {
      state.rooms = state.rooms.filter((room) => room._id !== action.payload);
    },
  },
});

export const { setRooms, addRoom, updateRoom, deleteRoom } = roomSlice.actions;
export default roomSlice.reducer;
