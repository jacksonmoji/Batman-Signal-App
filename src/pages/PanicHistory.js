import { Link as RouterLink } from "react-router-dom";
import { Button, styled, Container, Typography } from "@mui/material";

import PanicHistoryList from "../components/PanicHistoryList";
import Header from "../components/Header";

const SectionStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const PanicHistory = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <SectionStyle>
        <Header />
        <Button
          component={RouterLink}
          to="/home"
          variant="contained"
          color="secondary"
          sx={{
            maxWidth: 100,
          }}
        >
          Home
        </Button>
        <Typography variant="h4" gutterBottom>
          Panic History
        </Typography>
        <PanicHistoryList />
      </SectionStyle>
    </Container>
  );
};

export default PanicHistory;
