import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleAddOns } from "../features/addonsSlice";

function AddOnsExperience() {
  const dispatch = useAppDispatch();

  const { addons } = useAppSelector((state) => state.addons);
  const { planOption } = useAppSelector((state) => state.plan);

  return (
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
            {planOption === "monthly" ? addon.monthlyPrice : addon.yearlyPrice}/
            {planOption === "monthly" ? "mo" : "yr"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AddOnsExperience;
