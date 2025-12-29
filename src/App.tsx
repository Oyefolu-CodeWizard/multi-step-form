import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserInfo from "./Pages/UserInfo";
import PlanPage from "./Pages/PlanPage";
import AddOnsPage from "./Pages/AddOnsPage";
import SummaryPage from "./Pages/SummaryPage";
import ThankYouPage from "./Pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Navigate replace to="user" />} />
          <Route path="user" element={<UserInfo />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="addons" element={<AddOnsPage />} />
          <Route path="summary" element={<SummaryPage />} />
          <Route path="thanks" element={<ThankYouPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
