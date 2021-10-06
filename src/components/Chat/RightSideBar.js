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
const drawerWidth = 240;

const RightSideBar = ({users, channelMembers}) => {
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
        
        {/* <ListSubheader>ALL USERS</ListSubheader>
        <List style={{ overflowX: "hidden" }}>
        {users.slice(0, 20).map((val) => {
                return (
                  <ListItem  key={val.id}>
                    <ListItemText style={{ margin: 0, width: '100%',}} primary={`${val.uid}`} />
                  </ListItem>
                );
              })}
        </List> */}

        <ListSubheader>Channel Members</ListSubheader>
        <List style={{ overflowX: "hidden" }}>
        {channelMembers.map((val) => {
                return (
                  <ListItem  key={val.id}>
                    <ListItemText style={{ margin: 0, width: '100%',}} primary={`${val.email}`} />
                  </ListItem>
                );
              })}
        </List>

        <Divider />
      </Drawer>
    )
}

export default RightSideBar
