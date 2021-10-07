import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemButton } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const RightSideBar = ({users, channelMembers, usersDisplayed}) => {
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar style={{opacity: "0"}}/>
        <Divider />
        

        
      { usersDisplayed.home &&
        (<>
        <ListSubheader>ALL USERS</ListSubheader>
        <List style={{ overflowX: "hidden" }} className="channel-list">
        {users.slice(0, 100).map((val) => {
                return (
                  <ListItem  key={val.id}>
                    <Avatar style={{marginRight: "10px", backgroundColor: "purple"}}>{val.email.slice(0, 1).toUpperCase()}</Avatar>
                    <ListItemText style={{ margin: 0, width: '100%',}} primary={`${val.uid.split("@")[0]}`} />
                  </ListItem>
                );
              })}
        </List>
        </>)
            }

        {usersDisplayed.channel &&
        (<>
        <ListSubheader>Channel Members</ListSubheader>
        <List style={{ overflowX: "hidden" }} className="channel-list">
        {channelMembers.map((val) => {
                return (
                  <ListItem key={val.id}>
                     <Avatar style={{marginRight: "10px", backgroundColor: "purple"}}>{val.email.slice(0, 1).toUpperCase()}</Avatar>
                    <ListItemText style={{ margin: 0, width: '100%',}} primary={`${val.email.split("@")[0]}`} />
                  </ListItem>
                );
              })}
        </List>
        </>)
        }

        <Divider />
      </Drawer>
    )
}

export default RightSideBar
