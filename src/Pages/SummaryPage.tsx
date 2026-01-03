import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

// Finishing up
// Double-check everything looks OK before confirming.

// <!-- Dynamically add subscription and add-on selections here -->

// Total (per month/year)

function SummaryPage() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/thanks");
  };
  const handleBack = () => {
    navigate("/addons");
  };
  return (
    <div className="summary">
      <div className="summary-container">
        <div className="summary-header">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>

        <div className="summary-details">
          {/* Dynamically add subscription and add-on selections here */}
          <div className="summary-selected-plan">
            <div className="plan-info-cont">
              <span className="plan-info">
                <h4>Arcade (Monthly)</h4>
                <a>Change</a>
              </span>
              <span className="info-price">$9/mo</span>
            </div>

            <div className="summary-addons">
              <div className="addon-item">
                <span>Online service</span>
                <span>+$1/mo</span>
              </div>
              <div className="addon-item">
                <span>Larger Storage</span>
                <span>+$2/mo</span>
              </div>
              {/* Add more add-ons as needed */}
            </div>
          </div>
        </div>
        <div className="summary-total">
          <h2>Total (per month/year)</h2>
          <span>+$12/mo</span>
        </div>

        <div className="summary-buttons">
          <Button type="back" onClick={handleBack}>
            Go Back
          </Button>
          <Button type="confirm" onClick={handleConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
