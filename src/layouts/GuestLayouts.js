import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { getAuthenticationStatus } from "../redux/selectors";
import Notification from "../components/Notification";

const GuestLayouts = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    } else {
      navigate("/home", { replace: true });
    }
 
  }, [user, navigate]);

  return (
    <>
      <Notification />
      <Outlet />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: getAuthenticationStatus(state),
});

export default connect(mapStateToProps)(GuestLayouts);
