import {TextField, Button, Typography, Paper} from "@material-ui/core";
import React, {useState} from "react";
import FileBase from "react-file-base64";
import useStyles from "./styles";
const Form = () => {
  const classes = useStyles();
  const [postsData, setPostsData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const submitHandler = (event) => {};
  const clear = (event) => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={submitHandler}>
        <Typography variant='h6'>Creating a Moment</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          onChange={(e) =>
            setPostsData({...postsData, creator: e.target.value})
          }
          value={postsData.creator}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          onChange={(e) => setPostsData({...postsData, title: e.target.value})}
          value={postsData.title}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          onChange={(e) =>
            setPostsData({...postsData, message: e.target.value})
          }
          value={postsData.message}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          onChange={(e) => setPostsData({...postsData, tags: e.target.value})}
          value={postsData.tags}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            miltiple={false}
            onDone={({base64}) =>
              setPostsData({...postsData, selectedFile: base64})
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='container'
          color='primary'
          size='large'
          type='submit'
          fullWidth
          onClick={submitHandler}>
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
