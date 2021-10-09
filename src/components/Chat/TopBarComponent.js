import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FormDialoguesComponent from "./FormDialoguesComponent";
import "./styles.css"


const TopBarComponent = ({
  drawerWidth,
  headers,
  handleDrawerToggle,
  channels,
  selectedChannel,
  inviteUserToAChannel,
  userID,
  selectedUser,
  currentDateAndTime,
  userInviteError,
  setUserInviteError,
  setGetEmail
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        className="appbar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar 
          className="top-toolbar" 
          style={{
            backgroundColor: "purple"}} >

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {selectedChannel.name ? (
            <Box onClick={() => handleClickOpen()}>
              <ListItemButton className="invite-button">
                <PersonAddIcon style={{fontSize: '1.5rem', marginRight: '0.5rem'}} />
                <span className="invite">
                  {`Invite`}
                </span>
              </ListItemButton>
            </Box>
          ) : (
            <Box style={{display: "flex", flexDirection: 'column'}}>
            <span style={{fontSize: '0.75rem'}}>
              {`${currentDateAndTime.currentDate}`}
              </span>
              <span style={{fontSize: '0.75rem'}}>
              {`${currentDateAndTime.currentTime}`}
              </span>
            </Box>
          )}

          {(selectedChannel.name || selectedUser.email) && (
            <Box>
              <ListItemButton>
              <span style={{fontSize: '0.9rem'}} className="topbar-small">
                  {selectedChannel.name && <span><span className="top-bar-channel">Channel:</span> <span>{selectedChannel.name}</span></span>}{" "}
                  {selectedUser.email && `Chat with ${selectedUser.email}`}
                  </span>
              </ListItemButton>
            </Box>
          )}

          <Box className="top-bar-email">         
            <span style={{fontSize: '0.75rem', paddingRight: '2px'}}>
              {`${headers.uid}`}
              </span>
              <span style={{fontSize: '0.75rem'}}>
              {`ID: ${userID}`}
              </span>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Form Dialogues */}
      <FormDialoguesComponent
        open={open}
        handleClose={handleClose}
        dialogTitleText={
          selectedChannel &&
          `Enter email to invite to ${selectedChannel.name}`
        }
        channels={channels}
        type={"text"}
        label={"Email"}
        inviteUserToAChannel={inviteUserToAChannel}
        userInviteError={userInviteError}
        setUserInviteError={setUserInviteError}
        setGetEmail={setGetEmail}
      />
    </>
  );
};

export default TopBarComponent;
