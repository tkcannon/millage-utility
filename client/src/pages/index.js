import { Box, Container } from "@mui/material";

function Page(props) {
  return (
    <Container>
      <Box sx={{ height: 110, display: "block", visibility: "hidden" }} />
      {props.children}
    </Container>
  );
}

export default Page;
