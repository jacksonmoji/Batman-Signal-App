// import { Link as RouterLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../redux/selectors";
import { connect } from "react-redux";

// @mui
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

// components
import PanicForm from "../components/panicForm";
import Header from "../components/header";
// ----------------------------------------------------------------------

const SectionStyle = styled("div")(({ theme }) => ({
  maxWidth: 300,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const Panic = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <SectionStyle>
        <Header />
        <Typography>Enter Panic Information</Typography>
        <PanicForm />
      </SectionStyle>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Panic);
