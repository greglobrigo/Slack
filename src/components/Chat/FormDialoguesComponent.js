import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const FormDialoguesComponent = ({
  open,
  handleClose,
  dialogTitleText,
  inviteUserToAChannel,
  label,
  type,
  createNewChannelWithUser,
  intervalRetrieveMessagesWithUser,
  sortByEmail,
  searchResults,
  isCreateChannel,
  setIsCreateChannel,
  userInviteError,
  setUserInviteError,
  setGetChannel,
  setGetEmail
  
}) => {
  const [valueFromForm, setValueFromForm] = useState("");

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ pb: 1 }}>{dialogTitleText}</DialogTitle>
        <DialogContent>
          {sortByEmail && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={label}
              type={type}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setValueFromForm(e.target.value);
                sortByEmail(valueFromForm);
              }}
              value={valueFromForm}
            />
          )}

          {searchResults && (
            <List className="list-results">
              {searchResults.map((val) => {
                return (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={val.id}
                    onClick={() => {
                      intervalRetrieveMessagesWithUser(val);
                      handleClose();
                      setValueFromForm("");
                    }}
                  >
                    <ListItemText primary={`${val.uid}`} />
                  </ListItemButton>
                );
              })}
            </List>
          )}

          {inviteUserToAChannel && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={label}
              type={type}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setValueFromForm(e.target.value);
              }}
              value={valueFromForm}
            />
          )}

          {userInviteError && (
            <span style={{ color: "red" }}>{userInviteError}</span>
          )}

          {createNewChannelWithUser && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={label}
              type={type}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setValueFromForm(e.target.value);
              }}
              value={valueFromForm}
            />
          )}
          {isCreateChannel?.failed && (
            <span style={{ color: "red" }}>{[...isCreateChannel.failed]}</span>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setValueFromForm("");
              isCreateChannel && setIsCreateChannel(false);
              userInviteError && setUserInviteError("");
            }}
          >
            Cancel
          </Button>
          {inviteUserToAChannel && (
            <Button
              onClick={() => {
                setGetEmail(valueFromForm)
                inviteUserToAChannel(valueFromForm, handleClose, setValueFromForm)
                setTimeout(() => {
                setGetEmail('')
              }, 4000);  
              }}
            >
              Invite
            </Button>
          )}
          {createNewChannelWithUser && (
            <Button
              sx={{ alignItems: "center" }}
              onClick={() => {
                setGetChannel(valueFromForm)
                createNewChannelWithUser(valueFromForm, handleClose, setValueFromForm)
                setTimeout(() => {
                setGetChannel('')
              }, 4000);                
              }}
            >
              Create
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};



export default FormDialoguesComponent;
