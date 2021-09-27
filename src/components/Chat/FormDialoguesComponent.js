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


const FormDialoguesComponent = ({open, handleClose, dialogTitleText1, dialogTitleText2, channels, selectedChannel, inviteUserToAChannel}) => {

  const [idFromForm, setIDfromForm] = useState('')
  
  return (
    <div>     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitleText1}</DialogTitle>   
        <DialogTitle>{dialogTitleText2}</DialogTitle>
        <DialogContent>     
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User ID"
            type="number"
            fullWidth
            variant="standard"
            value={idFromForm}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>inviteUserToAChannel()}>Invite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialoguesComponent
