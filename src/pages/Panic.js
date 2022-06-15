import { Link as RouterLink } from "react-router-dom";
import React from "react";

import { styled, Container, Button } from "@mui/material";

import PanicForm from "../components/PanicForm";
import Header from "../components/Header";

const SectionStyle = styled("div")(({ theme }) => ({
  maxWidth: 300,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

const Panic = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <SectionStyle>
        <Header />
        <PanicForm />
        <Button
          component={RouterLink}
          to="/home"
          variant="contained"
          color="secondary"
        >
          Home
        </Button>
      </SectionStyle>
    </Container>
  );
};

export default Panic;
