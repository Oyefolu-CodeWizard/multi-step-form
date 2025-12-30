import { useAppDispatch, useAppSelector } from "../hooks";
import { setSelectedPlan } from "../features/planSlice";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

function PlanCards() {
  const dispatch = useAppDispatch();
  const { selectedPlan, planOption } = useAppSelector((state) => state.plan);
  console.log(selectedPlan, planOption);

  return (
    <div className="plan-cards">
      <div
        className={`card arcade ${selectedPlan === "arcade" ? "selected" : ""}`}
        onClick={() => dispatch(setSelectedPlan("arcade"))}
      >
        <img src={iconArcade} alt="arcade icon" />
        <h4>Arcade</h4>
        <p>{planOption === "monthly" ? "$9/mo" : "$90/yr"}</p>
        {planOption === "yearly" && (
          <small className="free-plan">2 months free</small>
        )}
      </div>
      <div
        className={`card advanced ${
          selectedPlan === "advanced" ? "selected" : ""
        }`}
        onClick={() => dispatch(setSelectedPlan("advanced"))}
      >
        <img src={iconAdvanced} alt="advanced icon" />
        <h4>Advanced</h4>
        <p>{planOption === "monthly" ? "$12/mo" : "$120/yr"}</p>
        {planOption === "yearly" && (
          <small className="free-plan">2 months free</small>
        )}
      </div>
      <div
        className={`card pro ${selectedPlan === "pro" ? "selected" : ""}`}
        onClick={() => dispatch(setSelectedPlan("pro"))}
      >
        <img src={iconPro} alt="pro icon" />
        <h4>Pro</h4>
        <p>{planOption === "monthly" ? "$15/mo" : "$150/yr"}</p>
        {planOption === "yearly" && (
          <small className="free-plan">2 months free</small>
        )}
      </div>
    </div>
  );
}

export default PlanCards;
