import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/selectors";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { loginRequest } from "../redux/api/auth";

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
  const navigate = useNavigate();
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      console.log("user is logged in");
      navigate("/home", { replace: true });
    }
    // place listener for user account and re-route to homepage if user loggedin
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSubmitting(true);

    onLoginPressed({ ...formData });

    setTimeout(() => {
      // setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
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
          <TextField
            name="email"
            placeholder="Enter your email address"
            value={formData.email || ""}
            onChange={handleChange}
          />

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
