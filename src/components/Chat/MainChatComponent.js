import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import SidebarComponent from './SidebarComponent';
import TopBarComponent from './TopBarComponent'
import ChatBodyComponent from './ChatBodyComponent';


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
    isAChannelSelected,
    selectedChannel,
    setSelectedChannel,
    createMessageInAChannel,
    intervalRetrieveMessages
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
       <TopBarComponent
         drawerWidth={300}
         headers={headers}
         handleDrawerToggle={handleDrawerToggle}
         open={open}
         setOpen={setOpen}
         handleClose={handleClose}
         channels={channels}
         handleClickOpen={handleClickOpen} 
         isAChannelSelected={isAChannelSelected}  
         selectedChannel={selectedChannel}
         setSelectedChannel={setSelectedChannel}
         inviteUserToAChannel={inviteUserToAChannel}   
       />
        <Box
          component="nav"
          sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
          aria-label="mailbox folders"
        >          
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
                selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel}
                intervalRetrieveMessages={intervalRetrieveMessages}                              
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
                selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel}   
                intervalRetrieveMessages={intervalRetrieveMessages}                                                     
              />
            }
          </Drawer>
        </Box>
        <ChatBodyComponent
        allMessagesRetrieved={allMessagesRetrieved}
        setMessage={setMessage}
        message={message}
        createMessageInAChannel={createMessageInAChannel}
        />
      </Box>
    </>
  );
};

export default MainChatComponent
