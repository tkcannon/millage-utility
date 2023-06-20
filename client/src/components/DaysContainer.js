import { useSiteContext } from "../state/GlobalState";
import { useState, useEffect } from "react";
import { idbPromise } from "../state/idb";
import { SET_TRIPS } from "../state/actions";
import { Box } from "@mui/material";
import Day from "./Day";

function DaysContainer() {
  const [state, dispatch] = useSiteContext();

  const [days, setDays] = useState([]);

  useEffect(() => {
    async function getTrips() {
      const trips = await idbPromise("get", "trips");
      dispatch({ type: SET_TRIPS, trips: trips });
    }
    if (!state.trips.length) {
      getTrips();
    }
  }, [state.trips.length, dispatch]);

  useEffect(() => {
    function sortTrips() {
      const trips = state.trips.sort((a, b) => {
        return a.start > b.start ? -1 : 1;
      });
      let previousTrip = trips[0];
      let day = [];
      let days = [];
      for (let i = 0; i < trips.length; i++) {
        const trip = trips[i];
        if (trip.date === previousTrip.date) {
          day.push(trip);
          if (i === trips.length - 1) {
            days.push(day);
          }
        } else {
          days.push(day);
          day = [trip];
        }
        previousTrip = trip;
      }
      setDays(days);
    }
    if (state.trips.length) {
      sortTrips();
    }
  }, [state.trips.length]);

  return (
    <Box>
      {days.map((day, i) => {
        return <Day trips={days[i]} key={i} />;
      })}
    </Box>
  );
}
export default DaysContainer;
