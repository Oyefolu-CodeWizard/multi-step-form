import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Plan = "arcade" | "advanced" | "pro";
export type PlanOption = "monthly" | "yearly";

type PlanState = {
    selectedPlan: Plan;
    planOption: PlanOption;
}

const initialState: PlanState = {
    selectedPlan: "arcade",
    planOption: "monthly",
};

const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        setSelectedPlan(state, action: PayloadAction<Plan>) {
            state.selectedPlan = action.payload;
        },
        setPlanOption(state, action: PayloadAction<PlanOption>) {
            state.planOption = action.payload;
        }
    },
})

console.log(planSlice)

export const { setSelectedPlan, setPlanOption } = planSlice.actions;

export default planSlice.reducer;