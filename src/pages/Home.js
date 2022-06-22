import { Link as RouterLink } from "react-router-dom";
import { styled, Typography, Container, Button, Stack } from "@mui/material";

import Logout from "../components/Logout";
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

const Home = () => {
  return (
    <Container maxWidth="sm">
      <SectionStyle>
        <Header />
        <Stack spacing={2}>
          <Button variant="contained" color="primary">
            <Typography
              sx={{ textDecoration: "none" }}
              component={RouterLink}
              to="/panic"
            >
              Panic
            </Typography>
          </Button>
          <Button variant="contained" color="secondary">
            <Typography
              sx={{ textDecoration: "none" }}
              component={RouterLink}
              to="/history"
            >
              Panic History
            </Typography>
          </Button>
          <Logout />
        </Stack>
      </SectionStyle>
    </Container>
  );
};

export default Home;
