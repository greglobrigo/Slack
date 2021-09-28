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


const FormDialoguesComponent = ({open, handleClose, dialogTitleText, inviteUserToAChannel, label, type, createNewChannelWithUser, retrieveAllMessagesWithUser}) => {

  const [valueFromForm, setValueFromForm] = useState('')
  
  return (
    <div>     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitleText}</DialogTitle>           
        <DialogContent>     
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type={type}
            fullWidth
            variant="standard"
            value={valueFromForm}
            onChange={(e)=>setValueFromForm(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
        <Button onClick={()=>{handleClose(); setValueFromForm('')}}>Cancel</Button>
        {inviteUserToAChannel && <Button onClick={()=>{inviteUserToAChannel(valueFromForm); handleClose();}}>Invite</Button>}
        {createNewChannelWithUser && <Button onClick={()=>{createNewChannelWithUser(valueFromForm); handleClose();}}>Create</Button>}
        {retrieveAllMessagesWithUser && <Button onClick={()=>{retrieveAllMessagesWithUser(valueFromForm); handleClose();}}>Enter</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialoguesComponent
