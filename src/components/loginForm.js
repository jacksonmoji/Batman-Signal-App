import { useReducer } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthenticationStatus } from "../redux/selectors";
import {
  FormControl,
  TextField,
  Box,
  Stack,
  Button,
  Typography,
} from "@mui/material";

import { loginRequest } from "../redux/apis/auth";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      email: "",
      password: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const LogInForm = ({ onLoginPressed, user, isLoading }) => {
  const [formData, setFormData] = useReducer(formReducer, {
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginPressed({ ...formData });
  };

  if (user.token) {
    return <Navigate to={"/home"} replace />;
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl
        fullWidth
        sx={{
          my: 5,
        }}
      >
        <Stack spacing={1}>
          {user.errors && (
            <Typography color="primary"> {user.errors.email}</Typography>
          )}
          <TextField
            name="email"
            placeholder="Enter your email address"
            value={formData.email || ""}
            onChange={handleChange}
          />
          {user.errors && (
            <Typography color="primary"> {user.errors.password}</Typography>
          )}
          <TextField
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password || ""}
            onChange={handleChange}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  user: getAuthenticationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginPressed: (data) => dispatch(loginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
