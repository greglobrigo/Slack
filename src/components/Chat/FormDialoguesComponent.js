import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


const FormDialoguesComponent = ({open, handleClose, dialogTitleText1, dialogTitleText2, channels}) => {

  return (
    <div>     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitleText1}</DialogTitle>
        <DialogContent>   
        <List component="div" disablePadding>
              {channels ? (
                channels.map((channel) => {
                  return (
                    <ListItemButton
                      sx={{pl: 4}}
                      key={channel.id}                      
                    >                      
                      <ListItemText                        
                      primary={`${channel.name}`}
                      secondary={`channel ID: ${channel.id}`}
                      />
                    </ListItemButton>
                  );
                })
              ) : (
                <ListItemButton sx={{pl: 4}}>
                  <ListItemText primary={`No users Available`} />
                </ListItemButton>
              )}
            </List>                  
        </DialogContent>

        <DialogTitle>{dialogTitleText2}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialoguesComponent
