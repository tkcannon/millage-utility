import {
  Button,
  Collapse,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

function MillageForm(props) {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button sx={{ my: 1 }} onClick={handleOpen}>
        {open ? "Close" : "New Trip"}
      </Button>
      <Collapse in={open} timeout="auto">
        <FormControl
          fullWidth
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
        >
          <TextField id="date" variant="outlined" type="date" size="small" />
          <TextField
            id="start"
            label="Start"
            variant="outlined"
            type="number"
            size="small"
          />
          <TextField
            id="end"
            label="End"
            variant="outlined"
            type="number"
            size="small"
          />
          <TextField
            id="destination"
            label="Destination"
            variant="outlined"
            type="text"
            size="small"
          />
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="purpose-label">Purpose</InputLabel>
            <Select
              id="purpose"
              labelId="purpose-label"
              label="Purpose"
              variant="outlined"
              type="select"
              defaultValue={"b"}
              size="small"
            >
              <MenuItem value={"b"}>Business</MenuItem>
              <MenuItem value={"p"}>Personal</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{ m: 1 }} variant="contained">
            Submit
          </Button>
        </FormControl>
      </Collapse>
    </>
  );
}

export default MillageForm;
