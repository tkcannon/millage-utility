import { useState } from "react";
import "./styles.css";

function InputForm() {
  const [data, setData] = useState({
    date: null,
    start: null,
    end: null,
    location: null,
    purpose: "Business",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <label>
        Date
        <input type="date" defaultValue={"today"}></input>
      </label>
      <label>
        Start Millage
        <input type="number"></input>
      </label>
      <label>
        End Millage
        <input type="number"></input>
      </label>
      <label>
        Location
        <input></input>
      </label>
      <label>Type</label>
      <input list="purpose" />
      <datalist id="purpose">
        <option value="Business" />
        <option value="Personal" />
      </datalist>
      <button onClick={handleSubmit}>SUBMIT</button>
    </form>
  );
}

export default InputForm;
