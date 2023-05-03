import { useEffect, useState } from "react";
import "./styles.css";

function Table({ data }) {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (data !== rowData) {
      setRowData(data);
    }
  }, [data, rowData]);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Start</th>
          <th>End</th>
          <th>Location</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((arr) => {
          return (
            <tr>
              {arr.map((cell) => {
                return <td>{cell}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
