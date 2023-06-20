export function importCSV(file, callback) {
  const reader = new FileReader();

  reader.onload = (event) => {
    const regex = new RegExp("\\r?\\n");
    const data = event.target.result;
    const rows = data.split(regex);
    const rowData = rows.map((row) => {
      return row.split(",");
    });
    callback(rowData);
  };
  reader.readAsText(file);
  return;
}
