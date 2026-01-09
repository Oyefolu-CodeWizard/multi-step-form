import { useAppDispatch, useAppSelector } from "../hooks";
import { setPlanOption } from "../features/planSlice";

function PlanOption() {
  const dispatch = useAppDispatch();
  const { planOption } = useAppSelector((state) => state.plan);

  return (
    <div className="plan-option">
      <p className={planOption === "monthly" ? "active" : ""}>Monthly</p>
      <label className="switch">
        <input
          type="checkbox"
          className="plan-check"
          checked={planOption === "yearly"}
          onChange={() =>
            dispatch(
              setPlanOption(planOption === "monthly" ? "yearly" : "monthly")
            )
          }
        />
        <span className="slider round"></span>
      </label>
      <p className={planOption === "yearly" ? "active" : ""}>Yearly</p>
    </div>
  );
}

export default PlanOption;
