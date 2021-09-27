import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField  from "@mui/material/TextField";
import SidebarComponent from './SidebarComponent';

const MainChatComponent = ({
    props,
    headers,
    users,
    channels,
    handleClickOpenChannel,
    openChannel,
    retrieveChannel,
    inviteUserToAChannel,
    createNewChannelWithUser,
    handleClickOpenUsers,
    openUsers,
    handleDrawerToggle,
    mobileOpen,
    allMessagesRetrieved,
    message,
    setMessage,
    open,
    setOpen,
    handleClickOpen,
    handleClose,
  }
) => {
  const drawerWidth = 300;
//   const {window} = props;
//   const container =
//     window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{display: "flex"}}>
        <CssBaseline />
        <AppBar
          className="appbar"
          position="fixed"
          sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`},
          }}
        >
          <Toolbar
            style={{backgroundColor: "purple", justifyContent: "space-between"}}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{mr: 2, display: {sm: "none"}}}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              {`${headers.uid}`}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: {xs: "block", sm: "none"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {
              <SidebarComponent
                handleClickOpenChannel={handleClickOpenChannel}
                openChannel={openChannel}
                channels={channels}
                retrieveChannel={retrieveChannel}
                inviteUserToAChannel={inviteUserToAChannel}
                createNewChannelWithUser={createNewChannelWithUser}
                handleClickOpenUsers={handleClickOpenUsers}
                users={users}
                openUsers={openUsers}
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
              />
            }
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: {xs: "none", sm: "block"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {
              <SidebarComponent
                handleClickOpenChannel={handleClickOpenChannel}
                openChannel={openChannel}
                channels={channels}
                retrieveChannel={retrieveChannel}
                inviteUserToAChannel={inviteUserToAChannel}
                createNewChannelWithUser={createNewChannelWithUser}
                handleClickOpenUsers={handleClickOpenUsers}
                users={users}
                openUsers={openUsers}
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
              />
            }
          </Drawer>
        </Box>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <Toolbar />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 20px 150px ",
            }}
          >
            {allMessagesRetrieved.map((val) => {
              return <span key={val.id}>{val.body}</span>;
            })}
          </Box>

          <Box
            className="message-area-container"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              setMessage("");
            }}
          >
            <TextField
              className="message-area"
              id="outlined-basic"
              label="Enter your message here"
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainChatComponent
