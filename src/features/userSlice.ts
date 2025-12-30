import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  name: string;
  email: string;
  tel: string;
  errors: {
    name?: string;
    email?: string;
    tel?: string;
  };
};

const initialState: UserState = {
  name: "",
  email: "",
  tel: "",
  errors: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
      delete state.errors.name;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
      delete state.errors.email;
    },
    setTel(state, action: PayloadAction<string>) {
      state.tel = action.payload;
      delete state.errors.tel;
    },
    setErrors(state, action: PayloadAction<UserState["errors"]>) {
      state.errors = action.payload;
    },
    resetUser() {
      return initialState;
    },
  },
});

console.log(userSlice);

export const { setName, setEmail, setTel, setErrors, resetUser } =
  userSlice.actions;

export default userSlice.reducer;
