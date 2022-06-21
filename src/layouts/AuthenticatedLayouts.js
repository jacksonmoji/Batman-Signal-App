import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

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

const AuthenticatedLayouts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
    }
    return;
  }, [navigate]);

  return (
    <>
      <HeaderStyle>Batman</HeaderStyle>
      <Notification />
      <Outlet />
    </>
  );
};

export default AuthenticatedLayouts;
