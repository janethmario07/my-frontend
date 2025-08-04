import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/user-auth-slice";

const store = configureStore({
  reducer: {
    auth: userAuthReducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



export default store;
