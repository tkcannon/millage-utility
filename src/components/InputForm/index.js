import { useEffect, useState } from "react";
import { idbPromise } from "../../state/idb";
import { useSiteContext } from "../../state/GlobalState";
import { ADD_TRIPS } from "../../state/actions";

function InputForm() {
  const [data, setData] = useState({
    date: null,
    start: null,
    end: null,
    destination: null,
    purpose: "Business",
  });

  const [, dispatch] = useSiteContext();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onChange={handleChange}>
      <label>
        Date
        <input name="date" type="date" value={data.date}></input>
      </label>
      <label>
        Start Millage
        <input name="start" type="number" value={data.start}></input>
      </label>
      <label>
        End Millage
        <input name="end" type="number" value={data.end}></input>
      </label>
      <label>
        Destination
        <input name="destination" value={data.destination}></input>
      </label>
      <label>Type</label>
      <input name="purpose" list="purpose" value={data.purpose} />
      <datalist id="purpose">
        <option value="Business" />
        <option value="Personal" />
      </datalist>
      <button onClick={handleSubmit}>SUBMIT</button>
    </form>
  );
}

export default InputForm;
