import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

function Day(props) {
  const { trips } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const Trip = ({ trip }) => {
    const color = trip.purpose === "Business" ? "primary" : "black";
    return (
      <TableRow>
        <TableCell align="left">{trip.start}</TableCell>
        <TableCell align="center">{trip.end}</TableCell>
        <TableCell align="right">{trip.destination}</TableCell>
      </TableRow>
    );
  };

  return trips.length ? (
    <Paper sx={{ m: 3 }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow onClick={handleClick}>
              <TableCell align="left">{trips[0].date}</TableCell>
              <TableCell align="center">
                {trips[0].end - trips[trips.length - 1].start}
              </TableCell>
              <TableCell align="right">
                {open ? <ExpandLess /> : <ExpandMore />}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <Collapse in={open} sx={{ width: "100%" }}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left">Start</TableCell>
                <TableCell align="center">End</TableCell>
                <TableCell align="right">Destination</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trips.map((trip, i) => {
                return <Trip trip={trip} key={i} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Paper>
  ) : (
    <></>
  );
}
export default Day;
