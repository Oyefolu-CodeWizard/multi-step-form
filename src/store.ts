import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import planReducer from "./features/planSlice";
import addonsReducer from "./features/addonsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planReducer,
    addons: addonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
