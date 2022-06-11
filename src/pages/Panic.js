import { Link as RouterLink } from "react-router-dom";
import React from "react";

import { styled } from "@mui/material/styles";
import { Container, Button } from "@mui/material";

import PanicForm from "../components/panicForm";
import Header from "../components/header";

const SectionStyle = styled("div")(({ theme }) => ({
  maxWidth: 300,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

const Panic = ({ user }) => {
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
