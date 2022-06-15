import React, { useState, useEffect } from "react";
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

const PanicForm = ({
  onSendRequestPressed,
  panicInProgress,
  onCancelRequestPressed,
  panics,
}) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [panicType, setPanicType] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (latitude === "" || longitude === "") {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [latitude, longitude, panicType, details]);

  const handlePanicCancel = (event) => {
    event.preventDefault();
    onCancelRequestPressed(panics.panic_id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendRequestPressed({ panicType, details, latitude, longitude });
    setLatitude("");
    setLongitude("");
    setPanicType("");
    setDetails("");
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
                value={panicType}
                onChange={(e) => {
                  setPanicType(e.target.value);
                }}
              />

              <TextField
                name="details"
                placeholder="Details"
                multiline
                rows={4}
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
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
