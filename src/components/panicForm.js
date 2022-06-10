/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useReducer } from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  getPanicInformation,
  getUser,
  getPanicInProgress,
} from "../redux/selectors";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { sendPanicRequest, cancelPanicRequest } from "../redux/api/panic";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      latitude: 0,
      longitude: 0,
      panic_type: "",
      details: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const PanicForm = ({
  onSendRequestPressed,
  panicInProgress,
  onCancelRequestPressed,
  panics,
}) => {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if (latitude === "" || longitude === "") {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [latitude, longitude, panicInProgress]);

  const handlePanicCancel = (event) => {
    event.preventDefault();
    onCancelRequestPressed(panics.data.panic_id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSubmitting(true);

    onSendRequestPressed({ ...formData, latitude, longitude });

    setTimeout(() => {
      // setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  if (panicInProgress) {
    return (
      <>
        <Button
          onClick={handlePanicCancel}
          variant="contained"
          color="secondary"
        >
          Cancel Panic
        </Button>
        Panic in progress...
      </>
    );
  } else {
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
              name="panic_type"
              placeholder="Panic Type"
              value={formData.panic_type || ""}
              onChange={handleChange}
            />

            <TextField
              name="details"
              placeholder="Details"
              multiline
              rows={4}
              value={formData.details || ""}
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              Send
            </Button>

            <Button
              component={RouterLink}
              to="/home"
              variant="contained"
              color="secondary"
            >
              Home
            </Button>
          </Stack>
        </FormControl>
      </Box>
    );
  }
};

const mapStateToProps = (state) => ({
  panics: getPanicInformation(state),
  panicInProgress: getPanicInProgress(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendRequestPressed: (data) => dispatch(sendPanicRequest(data)),
  onCancelRequestPressed: (id) => dispatch(cancelPanicRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PanicForm);
