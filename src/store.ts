import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import planReducer from "./features/planSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
