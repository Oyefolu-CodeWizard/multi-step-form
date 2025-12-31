import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AddOnsId = "online-service" | "larger-storage" | "custom-profile";
export type AddOns = {
  id: AddOnsId;
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  selected: boolean;
};

type AddOnsState = {
  addons: AddOns[];
};

const initialState: AddOnsState = {
  addons: [
    {
      id: "online-service",
      title: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
      selected: false,
    },
    {
      id: "larger-storage",
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
    {
      id: "custom-profile",
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
      selected: false,
    },
  ],
};

const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    toggleAddOns(state, action: PayloadAction<AddOnsId>) {
      const addon = state.addons.find((a) => a.id === action.payload);
      if (addon) {
        addon.selected = !addon.selected;
      }
    },
  },
});

console.log(addonsSlice);

export const { toggleAddOns } = addonsSlice.actions;

export default addonsSlice.reducer;
