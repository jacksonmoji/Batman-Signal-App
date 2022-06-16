import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/selectors";
import {
  FormControl,
  TextField,
  Box,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";

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

const LogInForm = ({ onLoginPressed, user }) => {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();
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

  useEffect(() => {
    if (user && user.isAuthenticated) {
      enqueueSnackbar(user.message, { variant: "success" });
      navigate("/home", { replace: true });
    }
    if (user && user.errors) {
      enqueueSnackbar(user.message, { variant: "error" });
    }
  }, [user, enqueueSnackbar, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onLoginPressed({ ...formData });

    setFormData({
      reset: true,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl
        fullWidth
        sx={{
          my: 5,
        }}
      >
        <Stack spacing={1}>
          {user && user.errors ? (
            <Typography color="primary"> {user.errors.email}</Typography>
          ) : null}
          <TextField
            name="email"
            placeholder="Enter your email address"
            value={formData.email || ""}
            onChange={handleChange}
          />
          {user && user.errors ? (
            <Typography color="primary"> {user.errors.password}</Typography>
          ) : null}
          <TextField
            name="password"
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
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginPressed: (data) => dispatch(loginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
