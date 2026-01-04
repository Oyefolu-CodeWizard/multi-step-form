import { useAppSelector } from "../hooks";
import {
  selectPlanSummary,
  selectAddOnsSummary,
  selectTotalSummary,
} from "../features/summarySelectors";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function SummaryPage() {
  const navigate = useNavigate();

  const planSummary = useAppSelector(selectPlanSummary);
  const addOnsSummary = useAppSelector(selectAddOnsSummary);
  const totalSummary = useAppSelector(selectTotalSummary);

  const isMonthly = useAppSelector(
    (state) => state.plan.planOption === "monthly"
  );

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
                <h4>
                  {planSummary.name.charAt(0).toUpperCase() +
                    planSummary.name.slice(1)}
                  ({isMonthly ? "Monthly" : "Yearly"})
                </h4>
                <a onClick={() => navigate("/plan")}>Change</a>
              </span>
              <span className="info-price">
                ${planSummary.price}/{isMonthly ? "mo" : "yr"}
              </span>
            </div>

            <div className="summary-addons">
              {addOnsSummary.map((addon) => (
                <div key={addon.id} className="addon-item">
                  <span>{addon.title}</span>
                  <span>
                    +$
                    {isMonthly ? addon.monthlyPrice : addon.yearlyPrice}/
                    {isMonthly ? "mo" : "yr"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="summary-total">
          <h2>Total (per {isMonthly ? "month" : "year"})</h2>
          <span>
            +${totalSummary}/{isMonthly ? "mo" : "yr"}
          </span>
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
