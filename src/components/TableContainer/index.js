import { useEffect } from "react";
import { useSiteContext } from "../../state/GlobalState";
import Table from "../Table";
import { idbPromise } from "../../state/idb";
import { ADD_TRIPS } from "../../state/actions";

function TableContainer() {
  const [state, dispatch] = useSiteContext();
  console.log(state.trips);

  useEffect(() => {
    async function getTrips() {
      const trips = await idbPromise("get", "trips");
      dispatch({ type: ADD_TRIPS, trips: trips });
    }
    if (!state.trips.length) {
      getTrips();
    }
  }, [state.trips.length, dispatch]);

  return <Table data={state.trips}></Table>;
}

export default TableContainer;
