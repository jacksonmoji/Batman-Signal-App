import { useEffect } from "react";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  tableCellClasses,
} from "@mui/material";

import Progress from "./Loader";

import { getPanicHistory, loading } from "../redux/selectors";
import { sendLoadPanicHistoryRequest } from "../redux/apis/panic";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PanicHistoryList = ({
  panicHistory,
  startLoadPanicHistory,
  panicHistoryLoading,
}) => {
  useEffect(() => {
    startLoadPanicHistory();
  }, [startLoadPanicHistory]);

  if (panicHistoryLoading) {
    return <Progress loading={panicHistoryLoading} type="linear" />;
  } else if (!panicHistory) {
    return <div>No history available</div>;
  } else {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} dense="true">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Panic Type</StyledTableCell>
              <StyledTableCell align="right">Details</StyledTableCell>
              <StyledTableCell align="right">Latitude</StyledTableCell>
              <StyledTableCell align="right">Longitude</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {panicHistory.map((row) => (
              <StyledTableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.panic_type}
                </StyledTableCell>
                <StyledTableCell align="right">{row.details}</StyledTableCell>
                <StyledTableCell align="right">{row.latitude}</StyledTableCell>
                <StyledTableCell align="right">{row.longitude}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.created_at}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    panicHistory: getPanicHistory(state),
    panicHistoryLoading: loading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLoadPanicHistory: () => dispatch(sendLoadPanicHistoryRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PanicHistoryList);
