import React from 'react';
import { Grid, IconButton, Button } from '@material-ui/core';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';

const RoomBottomBar = ({ leaveRoom, chatView }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: '1em' }}>
      <Grid item xs={3}>
        <IconButton onClick={(e) => chatView(e)}>
          <SpeakerNotesIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Button size="large" variant="outlined" onClick={(e) => leaveRoom(e)}>
          Leave Room
        </Button>
      </Grid>
    </Grid>
  );
};

export default RoomBottomBar;
