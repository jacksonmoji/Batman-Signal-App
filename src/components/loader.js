import { makeStyles } from "@mui/styles";
import { LinearProgress } from "@mui/material";

const useProgressStyles = makeStyles((theme) => ({
  progress: { margin: theme.spacing(2) },
}));

const Loader = ({ loading }) => {
  const classes = useProgressStyles();
  return loading ? <LinearProgress className={classes.progress} /> : null;
};

export default Loader;
