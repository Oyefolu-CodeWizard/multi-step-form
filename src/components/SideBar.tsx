import { NavLink, useLocation } from "react-router-dom";
import Step from "./Step";

function SideBar() {
  const location = useLocation();
  return (
    <div className="sidebar">
      <NavLink to="user">
        <Step btnNumber={1} stepNumber="STEP 1" stepTitle="YOUR INFO" />
      </NavLink>
      <NavLink to="plan">
        <Step btnNumber={2} stepNumber="STEP 2" stepTitle="SELECT PLAN" />
      </NavLink>
      <NavLink to="addons">
        <Step btnNumber={3} stepNumber="STEP 3" stepTitle="ADD-ONS" />
      </NavLink>
      <NavLink
        to="summary"
        className={({ isActive }) =>
          isActive || location.pathname.includes("thanks") ? "active" : ""
        }
      >
        <Step btnNumber={4} stepNumber="STEP 4" stepTitle="SUMMARY" />
      </NavLink>
    </div>
  );
}

export default SideBar;
