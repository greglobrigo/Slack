import React, { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import  Toolbar  from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import  Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ForumIcon from '@mui/icons-material/Forum';
import GetAppIcon from '@mui/icons-material/GetApp';
import FormDialoguesComponent from './FormDialoguesComponent';
import HomeIcon from '@mui/icons-material/Home';


const SidebarComponent = ({
  handleClickOpenChannel,
  openChannel,
  channels,
  retrieveChannel,
  inviteUserToAChannel,
  createNewChannelWithUser,
  handleClickOpenUsers,
  users,
  openUsers,
  selectedChannel,
  setSelectedChannel,
  intervalRetrieveMessages,
  retrieveAllMessagesWithUser
}) => {

  const [openForInviteUser, setOpenForInviteUser] = useState(false);
  const handleClickOpenForInviteUser = () => {
    setOpenForInviteUser(true);
 };
  const handleCloseForInviteUser = () => {
    setOpenForInviteUser(false);
 };

 const [openForSendDirectMessage, setOpenForSendDirectMessage] = useState(false);
 const handleClickOpenSendDirectMessage = () => {
  setOpenForSendDirectMessage(true);
};
 const handleCloseForSendDirectMessage = () => {
  setOpenForSendDirectMessage(false);
};



  return (
    <>
      <div>        
        <Toolbar />
        <Divider />         

        <List>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />            
          </ListItemButton>
        </List>

        <Divider />

        <List>
          <ListItemButton onClick={handleClickOpenChannel}>
            <ListItemIcon>
              <ForumIcon />
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
                      sx={{pl: 4}}
                      key={channel.id}
                      onClick={() => {intervalRetrieveMessages(channel.id); setSelectedChannel(channel)}}
                    >                      
                      <ListItemText primary={`${channel.name}`} />
                    </ListItemButton>
                  );
                })
              ) : (
                <ListItemButton sx={{pl: 4}}>
                  <ListItemText primary={`No users Available`} />
                </ListItemButton>
              )}
            </List>
          </Collapse>
        </List>               

        <Divider />

        <List>
          <ListItemButton onClick={() => handleClickOpenForInviteUser()}>
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Create New Channel..." />
            <AddIcon />
          </ListItemButton>
        </List>

        <Divider />

        <List>
          <ListItemButton onClick={() => handleClickOpenSendDirectMessage()}>
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Send a Direct Message" />
            <AddIcon />
          </ListItemButton>
        </List>

        <Divider />

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
                  <ListItemButton sx={{pl: 4}} key={val.id}>
                    <ListItemText primary={`${val.uid}`} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>

        <Divider />
      </div>

      {/* For Invite User Modal */}
      <FormDialoguesComponent
        open={openForInviteUser}
        handleClose={handleCloseForInviteUser}
        dialogTitleText={'Enter New Channel Name You Want to Create'}
        label={'Channel Name'}
        type={`text`}
        createNewChannelWithUser={createNewChannelWithUser}
      />
    {/* For Send a DM Modal */}
    <FormDialoguesComponent
        open={openForSendDirectMessage}
        handleClose={handleCloseForSendDirectMessage}
        dialogTitleText={'Enter User ID of Person you want to message'}
        label={'User ID'}
        type={`number`}
        retrieveAllMessagesWithUser={retrieveAllMessagesWithUser}
      />
    </>
  );
};

export default SidebarComponent
