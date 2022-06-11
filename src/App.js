import Router from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#4d4c4b9e",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
    fontWeightBold: "400, 700",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fefefe",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fefefe",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>

    // <Container component="main" maxWidth="sm"></Container>
    /* <Box sx={{ marginTop: 50 }}>
<Grid alignItems={"center"} container>
  <Grid item xs>
    <Typography component="h1" variant="h4">
      Batman Signal
    </Typography>
  </Grid>
</Grid>
</Box>
<PanicForm /> */
  );
}

export default App;