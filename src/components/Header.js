import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar sx={{ p: 1, alignItems: "center" }}>
      <Typography component={"h1"} variant="h1">
        Millage Utilitiy
      </Typography>
    </AppBar>
  );
}

export default Header;
