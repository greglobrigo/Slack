import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const RightSideBar = ({users, channelMembers, usersDisplayed}) => {
    return (
        <Drawer 
        className="right-side-bar"      
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
        <Toolbar 
        
        />        
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
