import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FormDialoguesComponent from "./FormDialoguesComponent";

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
          style={{
            backgroundColor: "purple",
            justifyContent: "space-between",
            paddingRight: "250px"}}
        >
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
              <ListItemButton>
                <PersonAddIcon style={{fontSize: '1.5rem', marginRight: '0.5rem'}} />
                <span style={{fontSize: '0.75rem'}}>
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

          {selectedChannel.name || selectedUser.email ? (
            <Box>
              <ListItemButton>
              <span style={{fontSize: '0.9rem'}}>
                  {selectedChannel.name && `Channel: ${selectedChannel.name}`}{" "}
                  {selectedUser.email && `Chat with ${selectedUser.email}`}
                  </span>
              </ListItemButton>
            </Box>
          ) : (
            <Box>
              <ListItemButton>
              <span style={{fontSize: '1rem'}}>
                  {"Avion Slack App"}
                  </span>
              </ListItemButton>
            </Box>
          )}

          <Box style={{ textAlign: "center", display: 'flex', flexDirection: 'column'}}>
            <span style={{fontSize: '0.75rem'}}>
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
