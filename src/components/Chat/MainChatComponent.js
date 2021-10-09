import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import SidebarComponent from "./SidebarComponent";
import TopBarComponent from "./TopBarComponent";
import ChatBodyComponent from "./ChatBodyComponent";
import RightSideBar from "./RightSideBar";
import { useState } from "react";
import {Redirect} from "react-router-dom";

const MainChatComponent = ({
  headers,
  users,
  channels,
  handleClickOpenChannel,
  openChannel,
  inviteUserToAChannel,
  createNewChannelWithUser,
  handleClickOpenUsers,
  openUsers,
  handleDrawerToggle,
  mobileOpen,
  allMessagesRetrieved,
  message,
  setMessage,
  isAChannelSelected,
  selectedChannel,
  setSelectedChannel,
  createMessageInAChannel,
  intervalRetrieveMessages,
  userID,
  returnToHome,
  sortByEmail,
  searchResults,
  selectedUser,
  createDirectMessageToAUser,
  intervalRetrieveMessagesWithUser,
  currentDateAndTime,
  isCreateChannel,
  setIsCreateChannel,
  userInviteError,
  setUserInviteError,
  stateSB,
  setStateSB,
  retrieveChannelUsers,
  channelMembers,
  usersDisplayed,
  userStatus,
  signOut,
  setMobileOpen
}) => {
  const drawerWidth = 320;
  //   const {window} = props;
  //   const container =
  //     window !== undefined ? () => window().document.body : undefined;
  const [getChannel, setGetChannel] = useState('')
  const [getEmail, setGetEmail] = useState('')

  return (
    <>
    
      <Box>
        <CssBaseline />
        <TopBarComponent
          drawerWidth={drawerWidth}
          headers={headers}
          handleDrawerToggle={handleDrawerToggle}
          isAChannelSelected={isAChannelSelected}
          selectedChannel={selectedChannel}
          inviteUserToAChannel={inviteUserToAChannel}
          userID={userID}
          selectedUser={selectedUser}
          currentDateAndTime={currentDateAndTime}
          userInviteError={userInviteError}
          setUserInviteError={setUserInviteError}
          setGetEmail={setGetEmail}    
        />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer            
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
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
                createNewChannelWithUser={createNewChannelWithUser}
                handleClickOpenUsers={handleClickOpenUsers}
                users={users}
                openUsers={openUsers}
                setSelectedChannel={setSelectedChannel}
                intervalRetrieveMessages={intervalRetrieveMessages}
                returnToHome={returnToHome}
                sortByEmail={sortByEmail}
                searchResults={searchResults}
                intervalRetrieveMessagesWithUser={intervalRetrieveMessagesWithUser}
                channels={channels}
                isCreateChannel={isCreateChannel}
                setIsCreateChannel={setIsCreateChannel}   
                setGetChannel={setGetChannel} 
                retrieveChannelUsers={retrieveChannelUsers}                  
                userStatus={userStatus}
                headers={headers}
                signOut={signOut} 
                setMobileOpen={setMobileOpen}                  
              />
            }
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
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
                createNewChannelWithUser={createNewChannelWithUser}
                handleClickOpenUsers={handleClickOpenUsers}
                users={users}
                openUsers={openUsers}
                setSelectedChannel={setSelectedChannel}
                intervalRetrieveMessages={intervalRetrieveMessages}
                returnToHome={returnToHome}
                sortByEmail={sortByEmail}
                searchResults={searchResults}
                intervalRetrieveMessagesWithUser={intervalRetrieveMessagesWithUser}
                channels={channels}
                isCreateChannel={isCreateChannel}
                setIsCreateChannel={setIsCreateChannel}
                setGetChannel={setGetChannel}     
                retrieveChannelUsers={retrieveChannelUsers}                  
                userStatus={userStatus}        
                headers={headers}    
                signOut={signOut}         
                setMobileOpen={setMobileOpen}                            
              />
            }
          </Drawer>
          </Box>


          <RightSideBar
            users={users}
            channelMembers={channelMembers}
            usersDisplayed={usersDisplayed}
            />        

            
        <ChatBodyComponent
          allMessagesRetrieved={allMessagesRetrieved}
          setMessage={setMessage}
          message={message}
          createMessageInAChannel={createMessageInAChannel}
          selectedChannel={selectedChannel}
          selectedUser={selectedUser}
          createDirectMessageToAUser={createDirectMessageToAUser}
          stateSB={stateSB}
          setStateSB={setStateSB}          
          getChannel={getChannel}
          getEmail={getEmail}
        />
      </Box>
    </>
  );
};

export default MainChatComponent;
