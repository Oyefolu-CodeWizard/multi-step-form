import Button from "../components/Button";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Plan = "arcade" | "advanced" | "pro";
type PlanOption = "monthly" | "yearly";

function PlanPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("arcade");
  const [planOption, setPlanOption] = useState<PlanOption>("monthly");
  console.log(selectedPlan, planOption);

  const navigate = useNavigate();

  const handleSelectedPlan = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleNext = () => {
    navigate("/addons");
  };
  const handleBack = () => {
    navigate("/user");
  };

  return (
    <div className="plans">
      <div className="plan-container">
        <div className="plan-header">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>

        <div className="plan-cards">
          <div
            className={`card arcade ${
              selectedPlan === "arcade" ? "selected" : ""
            }`}
            onClick={() => handleSelectedPlan("arcade")}
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
            onClick={() => handleSelectedPlan("advanced")}
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
            onClick={() => handleSelectedPlan("pro")}
          >
            <img src={iconPro} alt="pro icon" />
            <h4>Pro</h4>
            <p>{planOption === "monthly" ? "$15/mo" : "$150/yr"}</p>
            {planOption === "yearly" && (
              <small className="free-plan">2 months free</small>
            )}
          </div>
        </div>

        <div className="plan-option">
          <p className={planOption === "monthly" ? "active" : ""}>Monthly</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={planOption === "yearly"}
              onChange={() =>
                setPlanOption(planOption === "monthly" ? "yearly" : "monthly")
              }
            />
            <span className="slider round"></span>
          </label>
          <p className={planOption === "yearly" ? "active" : ""}>Yearly</p>
        </div>

        <div className="plan-buttons">
          <Button type="back" onClick={handleBack}>
            Go Back
          </Button>
          <Button type="next" onClick={handleNext}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlanPage;
