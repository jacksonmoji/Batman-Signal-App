import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function PageNotFound() {
  return (
    <Container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: "text.primary" }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Button to="/" size="large" variant="contained" component={RouterLink}>
          Go to Home
        </Button>
      </ContentStyle>
    </Container>
  );
}
