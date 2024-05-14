import React from "react";
import { useState } from "react";
import Filebase from "react-file-base64";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import { styles } from "./styles";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = () => {};
  const clear = () => {};

  return (
    <Paper sx={styles.paper}>
      <Box sx={(styles.root, styles.form)}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography sx={styles.typography} variant="h6">
            Share a Moment!
          </Typography>
          <Box>
            <TextField
              sx={styles.textField}
              name="creator"
              variant="outlined"
              label="Creator"
              fullWidth
              multiline
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
            <TextField
              sx={styles.textField}
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              multiline
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <TextField
              sx={styles.textField}
              name="message"
              variant="outlined"
              label="Message"
              fullWidth
              multiline
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
            <TextField
              sx={styles.textField}
              name="tags"
              variant="outlined"
              label="Tags"
              fullWidth
              multiline
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
          </Box>
          <Box sx={styles.fileInput}>
            <Filebase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </Box>
          <Button
            sx={styles.buttonSubmit}
            variant="contained"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            sx={styles.buttonClear}
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default Form;
