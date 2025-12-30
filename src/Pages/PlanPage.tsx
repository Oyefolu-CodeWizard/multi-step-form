import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PlanCards from "../components/PlanCards";
import PlanOption from "../components/PlanOption";

function PlanPage() {
  const navigate = useNavigate();

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

        <PlanCards />

        <PlanOption />

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
