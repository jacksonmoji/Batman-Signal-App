import { Outlet } from "react-router-dom";
import Notification from "../components/Notification";

const GuestLayouts = () => {
  return (
    <>
      <Notification />
      <Outlet />
    </>
  );
};

export default GuestLayouts;
