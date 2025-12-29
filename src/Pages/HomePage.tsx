import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <div className="homepage">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default HomePage;
