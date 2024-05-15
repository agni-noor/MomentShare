import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { styles } from "./styles";

const Post = () => {
  return (
    <Card sx={styles.card}>
      <Box sx={styles.overlay}>
        <Typography variant="h6">POST</Typography>
      </Box>
    </Card>
  );
};

export default Post;
