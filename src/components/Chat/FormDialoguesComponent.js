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


const FormDialoguesComponent = ({open, handleClose, dialogTitleText1, channels, selectedChannel, inviteUserToAChannel}) => {

  const [idFromForm, setIDfromForm] = useState('')
  
  return (
    <div>     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitleText1}</DialogTitle>           
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
            onChange={(e)=>setIDfromForm(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{inviteUserToAChannel(idFromForm); handleClose()}}>Invite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialoguesComponent
