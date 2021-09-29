import React, {useState} from 'react';
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


const FormDialoguesComponent = ({users, open, handleClose, dialogTitleText, inviteUserToAChannel, label, type, createNewChannelWithUser, intervalRetrieveMessagesWithUser, sortByEmail, searchResults}) => {

  const [valueFromForm, setValueFromForm] = useState('')
  
  return (
    <div>     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{pb:5}}>{dialogTitleText}</DialogTitle>           
        <DialogContent>     
          {sortByEmail && <TextField
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type={type}
            fullWidth
            variant="standard"                        
            onChange={(e)=>{setValueFromForm(e.target.value); sortByEmail(valueFromForm)}}
            value={valueFromForm}

          />}

           {inviteUserToAChannel && <TextField
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type={type}
            fullWidth
            variant="standard"                        
            onChange={(e)=>{setValueFromForm(e.target.value); inviteUserToAChannel(valueFromForm)}}
            value={valueFromForm}

          />}

           {createNewChannelWithUser && <TextField
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type={type}
            fullWidth
            variant="standard"                        
            onChange={(e)=>{setValueFromForm(e.target.value); createNewChannelWithUser(valueFromForm)}}
            value={valueFromForm}

          />}
        </DialogContent>
      {searchResults &&
        <List sx={{mt: 5}}>
              {searchResults.map((val) => {
                return (
                  <ListItemButton sx={{pl: 4}} key={val.id} onClick={()=>{intervalRetrieveMessagesWithUser(val); handleClose()}}>
                    <ListItemText primary={`${val.uid}`} />
                  </ListItemButton>
                );
              })}
            </List>            
      }


        <DialogActions>
        <Button onClick={()=>{handleClose(); setValueFromForm('')}}>Cancel</Button>
        {inviteUserToAChannel && <Button onClick={()=>{inviteUserToAChannel(valueFromForm); handleClose(); setValueFromForm('')}}>Invite</Button>}
        {createNewChannelWithUser && <Button sx={{ alignItems: 'center',}} onClick={()=>{createNewChannelWithUser(valueFromForm); handleClose(); setValueFromForm('')}}>Create</Button>}        
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialoguesComponent
