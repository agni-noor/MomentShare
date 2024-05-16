import React from "react";
import { useState, useEffect } from "react";
import momentshare from "./images/momentshare.png";

import { Container, AppBar, Typography, Grow, Grid, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { getPosts } from "./actions/posts";
import { styles } from "./styles";

const App = () => {
  const [currentID, setCurrentID] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <Typography sx={styles.heading} variant="h2" align="center">
          MomentShare
        </Typography>
        <Box sx={styles.image}>
          <img
            //style={{ marginLeft: "20px" }}
            src={momentshare}
            alt="momentshare"
            height="100"
            width="100"
            align="center"
          />
        </Box>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentID={currentID} setCurrentID={setCurrentID} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
