import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function SignOutComponent({open, handleClose, Avatar, signOut, headers}) {
  const email = headers.uid.toString()


  return (
    <div>     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to sign out?"}
        </DialogTitle>
        <DialogContent style={{display: 'flex', alignItems: 'center'}}> 
        <Avatar style={{marginRight: "10px", backgroundColor: "purple"}}>{`${email[0].toUpperCase()}`}</Avatar>
        {email}
        {/* {val.email.slice(0, 1).toUpperCase()} */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={()=>{signOut(); handleClose()}} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
