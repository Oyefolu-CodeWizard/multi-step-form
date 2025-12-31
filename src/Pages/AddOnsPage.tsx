import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { toggleAddOns } from "../features/addonsSlice";

// Larger storage
//   Extra 1TB of cloud save
//   +$2/mo

//   Customizable Profile
//   Custom theme on your profile
//   +$2/mo

function AddOnsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { addons } = useAppSelector((state) => state.addons);
  const { planOption } = useAppSelector((state) => state.plan);

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

        <div className="add-ons-experience">
          {addons.map((addon) => (
            <div
              className={`experience ${addon.selected ? "selected" : ""}`}
              key={addon.id}
              onClick={() => dispatch(toggleAddOns(addon.id))}
            >
              <div className="check-exp">
                <input
                  type="checkbox"
                  checked={addon.selected}
                  name=""
                  id=""
                  readOnly
                />
                <div>
                  <h4>{addon.title}</h4>
                  <p>{addon.description}</p>
                </div>
              </div>
              <p>
                +$
                {planOption === "monthly"
                  ? addon.monthlyPrice
                  : addon.yearlyPrice}
                /{planOption === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          ))}
        </div>

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
