import MillageForm from "../../components/MillageForm";
import MillageData from "../../components/MillageData";
import Page from "..";
import { Box, Divider } from "@mui/material";

function Millage() {
  return (
    <Page>
      <MillageForm />
      <Divider sx={{ mb: 2 }} />
      <MillageData />
    </Page>
  );
}

export default Millage;
