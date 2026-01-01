import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AddOnsExperience from "../components/AddOnsExperience";

function AddOnsPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/summary");
  };
  const handleBack = () => {
    navigate("/plan");
  };
  return (
    <div className="add-ons">
      <div className="add-ons-container">
        <div className="add-ons-header">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>

        <AddOnsExperience />

        <div className="add-ons-buttons">
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

export default AddOnsPage;
