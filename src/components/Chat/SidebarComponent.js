import React from 'react'
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
  setSelectedChannel
}) => {
  return (
    <>
      <div>        
        <Toolbar />
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
                      onClick={() => {retrieveChannel(channel.id); setSelectedChannel(channel)}}
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

        {/* <List>
            <ListItemButton onClick={handleClickOpenMessage}>
              <ListItemIcon>
                <ChatBubbleIcon />
              </ListItemIcon>
              <ListItemText primary="Direct Messages" />
              {openMessage ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMessage} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Direct Message 1" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Direct Message 2" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Direct Message 3" />
                </ListItemButton>
              </List>
            </Collapse>
          </List> */}

        {/* <Divider />

        <List>
        
            <ListItemButton onClick={()=>retrieveChannel()}>
              <ListItemIcon>
              <GetAppIcon/>
              </ListItemIcon>
              <ListItemText primary="Retrieve Channel" />              
              <AddIcon />
            </ListItemButton>
          </List>   */}

        <Divider />

        <List>
          <ListItemButton onClick={() => inviteUserToAChannel()}>
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Invite User to a Channel" />
            <AddIcon />
          </ListItemButton>
        </List>

        <Divider />

        <List>
          <ListItemButton onClick={() => createNewChannelWithUser()}>
            <ListItemIcon>
              <GetAppIcon />
            </ListItemIcon>
            <ListItemText primary="Create New Channel..." />
            <AddIcon />
          </ListItemButton>
        </List>

        <Divider />

        {/* <List>
        
            <ListItemButton onClick={()=>retrieveAllMessagesInAChannel()}>
              <ListItemIcon>
              <GetAppIcon/>
              </ListItemIcon>
              <ListItemText primary="Retrieve all messages in a channel" />              
              <AddIcon />
            </ListItemButton>
          </List> 

          <Divider /> */}

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
    </>
  );
};

export default SidebarComponent
