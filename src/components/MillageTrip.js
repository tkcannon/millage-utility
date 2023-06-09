import { Box, Divider, Typography } from "@mui/material";

function MillageTrip({ trip }) {
  console.log(trip);

  return (
    trip && (
      <Box>
        <Divider sx={{ mb: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">
            {trip.start} - {trip.end}
          </Typography>
          <Typography
            color={trip.purpose === "Business" ? "primary" : ""}
            variant="body2"
          >
            {trip.purpose}
          </Typography>
        </Box>
        <Typography variant="body2">{trip.destination}</Typography>
      </Box>
    )
  );
}
export default MillageTrip;
