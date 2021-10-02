import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FormDialoguesComponent from "./FormDialoguesComponent";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import GroupIcon from "@mui/icons-material/Group";

const SidebarComponent = ({
  handleClickOpenChannel,
  openChannel,
  channels,
  createNewChannelWithUser,
  handleClickOpenUsers,
  users,
  openUsers,
  setSelectedChannel,
  intervalRetrieveMessages,
  returnToHome,
  sortByEmail,
  searchResults,
  intervalRetrieveMessagesWithUser,
  isCreateChannel,
  setIsCreateChannel,  
  setGetChannel,  

}) => {
  const [openForInviteUser, setOpenForInviteUser] = useState(false);
  const handleClickOpenForInviteUser = () => {
    setOpenForInviteUser(true);
  };
  const handleCloseForInviteUser = () => {
    setOpenForInviteUser(false);
  };

  const [openForSendDirectMessage, setOpenForSendDirectMessage] =
    useState(false);
  const handleClickOpenSendDirectMessage = () => {
    setOpenForSendDirectMessage(true);
  };
  const handleCloseForSendDirectMessage = () => {
    setOpenForSendDirectMessage(false);
  };

  return (
    <>   
     <Toolbar 
          sx={{bgcolor: "purple"}}
        />  
      <div className="sidebar-container">
      <div className="side-navigation">
        <p>item1</p>
        <p>item1</p>
        <p>item1</p>
        <p>item1</p>
        <p>item1</p>
      </div>

      <div className="main-sidebar">
       

        <List onClick={() => {returnToHome()}}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </List>

        

        <List>
          <ListItemButton onClick={handleClickOpenChannel}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              primary={`My Channels (${channels ? channels.length : 0})`}
            />
            {openChannel ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openChannel} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {channels ? (
                channels.map((channel) => {
                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      key={channel.id}
                      onClick={() => {
                        intervalRetrieveMessages(channel.id);
                        setSelectedChannel(channel);
                      }}
                    >
                      <ListItemText primary={`${channel.name}`} />
                    </ListItemButton>
                  );
                })
              ) : (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={`No users Available`} />
                </ListItemButton>
              )}
            </List>
          </Collapse>
        </List>

        

        <List>
          <ListItemButton onClick={() => handleClickOpenForInviteUser()}>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create New Channel..." />
            <AddIcon />
          </ListItemButton>
        </List>

        

        <List>
          <ListItemButton onClick={() => handleClickOpenSendDirectMessage()}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Send a Direct Message" />
            <SendIcon />
          </ListItemButton>
        </List>

        

        <List>
          <ListItemButton onClick={handleClickOpenUsers}>
            <ListItemIcon>
              <ChatBubbleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`All Users (reduced to ${users.slice(0, 20).length})`}
            />
            {openUsers ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openUsers} timeout="auto" unmountOnExit>
            <List>
              {users.slice(0, 20).map((val) => {
                return (
                  <ListItemButton sx={{ pl: 4 }} key={val.id}>
                    <ListItemText primary={`${val.uid}`} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>

        
      </div>
      </div>

      {/* For Create Channel */}
      <FormDialoguesComponent
        open={openForInviteUser}
        handleClose={handleCloseForInviteUser}
        dialogTitleText={"Enter New Channel Name You Want to Create"}
        label={"Channel Name"}
        type={`text`}
        createNewChannelWithUser={createNewChannelWithUser}
        isCreateChannel={isCreateChannel}
        setIsCreateChannel={setIsCreateChannel}
        setGetChannel={setGetChannel}
      />
      {/* For Send a DM Modal */}
      <FormDialoguesComponent
        open={openForSendDirectMessage}
        handleClose={handleCloseForSendDirectMessage}
        dialogTitleText={"Who do you want to send a message to?"}
        label={"Email"}
        type={`text`}
        users={users}
        sortByEmail={sortByEmail}
        searchResults={searchResults}
        intervalRetrieveMessagesWithUser={intervalRetrieveMessagesWithUser}
      />
    </>
  );
};

export default SidebarComponent;
