import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MillageTrip from "./MillageTrip";

function MillageDay(props) {
  const { trips } = props;
  return trips.length ? (
    <Accordion>
      <AccordionSummary>{trips[0].date}</AccordionSummary>
      <AccordionDetails>
        {trips.map((trip, i) => (
          <MillageTrip trip={trip} key={i} />
        ))}
        <MillageTrip />
      </AccordionDetails>
    </Accordion>
  ) : (
    <></>
  );
}

export default MillageDay;
