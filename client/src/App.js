import React from "react";

import momentshare from "./images/momentshare.png";

import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          MomentShare
        </Typography>
        <img
          src={momentshare}
          alt="momentshare"
          height="500"
          width="500"
          align="center"
        />
      </AppBar>
    </Container>
  );
};

export default App;
