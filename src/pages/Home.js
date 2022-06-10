import { Link as RouterLink } from "react-router-dom";

// @mui
import { styled } from "@mui/material/styles";
import { Typography, Container, Button, Stack } from "@mui/material";

// components
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

const Home = () => {
  return (
    <Container maxWidth="sm">
      <SectionStyle>
        <Header />
        <Stack spacing={2}>
          <Button variant="contained" color="primary">
            <Typography
              sx={{ "text-decoration": "none" }}
              component={RouterLink}
              to="/panic"
            >
              Panic
            </Typography>
          </Button>
          <Button variant="contained" color="secondary">
            <Typography
              sx={{ "text-decoration": "none" }}
              component={RouterLink}
              to="/history"
            >
              Panic History
            </Typography>
          </Button>
        </Stack>
      </SectionStyle>
    </Container>
  );
};

export default Home;
