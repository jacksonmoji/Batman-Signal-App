import { useEffect } from "react";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";

import { getNotification } from "../redux/selectors";
import { clearNotification } from "../redux/actions/notificationActions";

const Notification = ({ notification, clearNotification }) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (notification.open) {
      enqueueSnackbar(notification.message, { variant: notification.status });
      clearNotification();
    }
  }, [clearNotification, notification, enqueueSnackbar]);

  return null;
};

const mapStateToProps = (state) => ({
  notification: getNotification(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearNotification: () => dispatch(clearNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
