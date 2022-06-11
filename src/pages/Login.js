import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

import LogInForm from "../components/loginForm";
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

const Login = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <SectionStyle>
        <Header />
        <Typography variant="h2" gutterBottom>
          Sign In
        </Typography>
        <Typography>Enter your details below.</Typography>
        <LogInForm />
      </SectionStyle>
    </Container>
  );
};

export default Login;
