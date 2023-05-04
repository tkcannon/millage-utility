import { useSiteContext } from "../../state/GlobalState";
import Table from "../Table";

function TableContainer() {
  const [state] = useSiteContext();
  console.log(state.trips);
  return <Table data={state.trips}></Table>;
}

export default TableContainer;
