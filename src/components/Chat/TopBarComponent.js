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
          style={{ backgroundColor: "purple", justifyContent: "space-between" }}
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
                <PersonAddIcon sx={{ mr: 1 }} />
                <Typography variant="h7" noWrap component="div">
                  {`Invite`}
                </Typography>
              </ListItemButton>
            </Box>
          ) : (
            <Box>
              {`${currentDateAndTime.currentDate}, ${currentDateAndTime.currentTime}`}
            </Box>
          )}

          {selectedChannel.name || selectedUser.email ? (
            <Box>
              <ListItemButton>
                <Typography variant="h7" noWrap component="div">
                  {selectedChannel.name && `Channel: ${selectedChannel.name}`}{" "}
                  {selectedUser.email && `Chat with ${selectedUser.email}`}
                </Typography>
              </ListItemButton>
            </Box>
          ) : (
            <Box>
              <ListItemButton>
                <Typography variant="h7" noWrap component="div">
                  {"Avion Slack App"}
                </Typography>
              </ListItemButton>
            </Box>
          )}

          <Box style={{ textAlign: "end" }}>
            <Typography variant="h12" component="div">
              {`${headers.uid} ID: ${userID}`}
            </Typography>
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
      />
    </>
  );
};

export default TopBarComponent;
