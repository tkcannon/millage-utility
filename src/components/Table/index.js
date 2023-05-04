import { useEffect, useState } from "react";
import "./styles.css";

function Table({ data }) {
  const [rowData, setRowData] = useState([]);
  console.log({ data: data });
  useEffect(() => {
    if (data !== rowData) {
      setRowData(data);
    }
  }, [data, rowData]);

  return data.length ? (
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
        {data.map((arr, i) => {
          return (
            <tr key={i}>
              {arr.map((cell, c) => {
                return <td key={c}>{cell}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <></>
  );
}

export default Table;
