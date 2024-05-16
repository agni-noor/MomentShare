import React from "react";
import moment from "moment";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { styles } from "./styles";

const Post = ({ post, setCurrentID }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <Box sx={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Box>

      <Box sx={styles.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentID(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </Box>

      <Box sx={styles.details}>
        <Typography variant="body2">{post.tags}</Typography>
      </Box>
      <Typography sx={styles.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button size="small" sx={styles.button} onClick={() => {}}>
          <ThumbUpIcon fontSize="small" />
          {post.likeCount}
        </Button>
        <Button size="small" sx={styles.button} onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
