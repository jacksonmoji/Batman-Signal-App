import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { getAuthenticationStatus } from "../redux/selectors";

import Notification from "../components/Notification";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

const AuthenticatedLayouts = ({ isAuthenticated }) => {
  if (!isAuthenticated.token) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <>
      <HeaderStyle>Batman</HeaderStyle>
      <Notification />
      <Outlet />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthenticationStatus(state),
});

export default connect(mapStateToProps)(AuthenticatedLayouts);
