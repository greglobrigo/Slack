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
  channelExists,
  channelError,
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

          {channelExists &&
            [...channelExists].map((val, id, asad) => {
              return (
                <div key={id}>
                  {val} {asad}
                </div>
              );
            })}

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
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setValueFromForm("");
            }}
          >
            Cancel
          </Button>
          {inviteUserToAChannel && (
            <Button
              onClick={() => {
                inviteUserToAChannel(valueFromForm);
                setValueFromForm("");
              }}
            >
              Invite
            </Button>
          )}
          {createNewChannelWithUser && (
            <Button
              sx={{ alignItems: "center" }}
              onClick={() => {
                createNewChannelWithUser(valueFromForm, handleClose);
                setValueFromForm("");
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
