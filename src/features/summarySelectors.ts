import { RootState } from "../store";

export const selectPlanSummary = (state: RootState) => {
  const { selectedPlan, planOption } = state.plan;

  const planPrices = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
  };

  return {
    name: selectedPlan,
    price:
      planOption === "monthly"
        ? planPrices[selectedPlan].monthly
        : planPrices[selectedPlan].yearly,
  };
};

export const selectAddOnsSummary = (state: RootState) =>
  state.addons.addons.filter((addon) => addon.selected);

export const selectTotalSummary = (state: RootState) => {
  const planSummary = selectPlanSummary(state);
  const addOnsSummary = selectAddOnsSummary(state);

  const addOnsTotal = addOnsSummary.reduce((total, addon) => {
    return (
      total +
      (state.plan.planOption === "monthly"
        ? addon.monthlyPrice
        : addon.yearlyPrice)
    );
  }, 0);

  return planSummary.price + addOnsTotal;
};
