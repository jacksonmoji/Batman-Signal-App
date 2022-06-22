import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../redux/apis/auth";
import { connect } from "react-redux";

const Logout = ({ onLogoutPressed }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogoutPressed();
    navigate("/login");
  };

  return (
    <Button onClick={handleLogout} variant="contained" color="secondary">
      <Typography>Logout</Typography>
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogoutPressed: () => dispatch(logoutRequest()),
});

export default connect(null, mapDispatchToProps)(Logout);
