import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [page, setPage] = useState("overview");

  const handlePageChange = (event, newValue) => {
    setPage(newValue);
  };

  function LinkTab(props) {
    return <Tab component={Link} {...props} />;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: "60px",
        width: "100%",
      }}
    >
      <Tabs
        component={"nav"}
        centered
        value={page}
        onChange={handlePageChange}
        bgcolo={"primary"}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <LinkTab value={"overview"} label="Overview" to="/" />
        <LinkTab value={"millage"} label="Millage" to="/millage" />
        <LinkTab value={"placeholder"} label="PlaceHolder" to="/overview" />
      </Tabs>
    </Box>
  );
}
export default Nav;
