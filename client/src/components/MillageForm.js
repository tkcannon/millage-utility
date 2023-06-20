import {
  Box,
  Button,
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSiteContext } from "../state/GlobalState";
import { ADD_TRIPS } from "../state/actions";

function MillageForm(props) {
  const [state, dispatch] = useSiteContext();

  const [openNewTrip, setOpenNewTrip] = useState(true);
  const [openImport, setOpenImport] = useState(false);

  const [formErrors, setFormErrors] = useState({
    date: false,
    start: false,
    end: false,
    description: false,
  });

  const [tripData, setTripData] = useState({
    date: "",
    start: "",
    end: "",
    destination: "",
    purpose: "b",
  });

  const [canSubmit, setCanSubmit] = useState(false);

  const handleOpenNewTrip = () => {
    setOpenNewTrip(!openNewTrip);
    setOpenImport(false);
  };

  const handleOpenImport = () => {
    setOpenImport(!openImport);
    setOpenNewTrip(false);
  };

  const handleDataChange = ({ target }) => {
    const { name, value } = target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleSubmitNewTrip = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_TRIPS, trips: [tripData] });
  };

  useEffect(() => {
    if (
      tripData.date &&
      tripData.start &&
      tripData.end &&
      tripData.destination &&
      tripData.purpose
    ) {
      setCanSubmit(true);
    } else if (canSubmit) {
      setCanSubmit(false);
    }
  }, [tripData]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ my: 1 }} onClick={handleOpenNewTrip}>
          {openNewTrip ? "Close" : "New Trip"}
        </Button>
        <Button sx={{ my: 1 }} onClick={handleOpenImport}>
          {openImport ? "Close" : "Import"}
        </Button>
      </Box>
      <Collapse in={openNewTrip} timeout="auto">
        <FormControl
          fullWidth
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
        >
          <TextField
            id="date"
            name="date"
            variant="outlined"
            type="date"
            size="small"
            onChange={handleDataChange}
          />
          <TextField
            id="start"
            error={formErrors.start}
            name="start"
            label="Start"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleDataChange}
          />
          <TextField
            id="end"
            error={formErrors.end}
            name="end"
            label="End"
            variant="outlined"
            type="number"
            size="small"
            onChange={handleDataChange}
          />
          <TextField
            id="destination"
            name="destination"
            label="Destination"
            variant="outlined"
            type="text"
            size="small"
            onChange={handleDataChange}
          />
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="purpose-label">Purpose</InputLabel>
            <Select
              id="purpose"
              name="purpose"
              labelId="purpose-label"
              label="Purpose"
              variant="outlined"
              type="select"
              defaultValue={"b"}
              size="small"
              onChange={handleDataChange}
            >
              <MenuItem value={"b"}>Business</MenuItem>
              <MenuItem value={"p"}>Personal</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{ m: 1 }}
            variant={canSubmit ? "contained" : "disabled"}
            onClick={handleSubmitNewTrip}
          >
            Submit
          </Button>
        </FormControl>
      </Collapse>
      <Collapse in={openImport} timeout={"auto"}>
        <FormControl
          fullWidth
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
        >
          <TextField id="file" variant="outlined" type="file" size="small" />
          <Button sx={{ m: 1 }} variant="contained">
            Import
          </Button>
        </FormControl>
      </Collapse>
    </>
  );
}

export default MillageForm;
