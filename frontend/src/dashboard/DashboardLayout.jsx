import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar";
import MyFooter from "../components/MyFooter";
import SideBar from "./Sidebar";

const DashboardLayout = () => {
  const [admin,
        // setAdmin
        ] = useOutletContext();

  if (admin) {
    return (
      <>
        <Navbar />
        <div className="flex gap-4 flex-col md:flex-row">
          <SideBar />
          <Outlet />
        </div>
        <MyFooter />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default DashboardLayout;
