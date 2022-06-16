import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { getPanicInformation, getPanicInProgress } from "../redux/selectors";
import {
  TextField,
  FormControl,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material/";
import Progress from "./Loader";
import { sendPanicRequest, cancelPanicRequest } from "../redux/apis/panic";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      latitude: "",
      longitude: "",
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
    latitude: "",
    longitude: "",
    panic_type: "",
    details: "",
  });

  useEffect(() => {
    if (formData.latitude === "" || formData.longitude === "") {
      navigator.geolocation.getCurrentPosition(function (position) {
        setFormData({
          name: "longitude",
          value: position.coords.longitude,
        });
        setFormData({
          name: "latitude",
          value: position.coords.latitude,
        });
      });
    }
  }, [formData]);

  const handlePanicCancel = (event) => {
    event.preventDefault();
    onCancelRequestPressed(panics.panic_id);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendRequestPressed({ ...formData }); //{ panicType, details, latitude, longitude });
    setFormData({ reset: true });
  };

  if (panicInProgress) {
    return (
      <>
        <Typography color="primary" variant="h6" gutterBottom>
          Panic Signal Up
        </Typography>
        <Progress loading={panicInProgress} type="linear" />
        <Button onClick={handlePanicCancel} variant="contained" color="primary">
          Cancel Panic
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Typography>Enter Panic Information</Typography>
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
            </Stack>
          </FormControl>
        </Box>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  panics: getPanicInformation(state),
  panicInProgress: getPanicInProgress(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendRequestPressed: (data) => dispatch(sendPanicRequest(data)),
  onCancelRequestPressed: (id) => dispatch(cancelPanicRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PanicForm);
