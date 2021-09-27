import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GetAppIcon from '@mui/icons-material/GetApp';
import ForumIcon from "@mui/icons-material/Forum";
import AddIcon from '@mui/icons-material/Add';
// import { TextField } from '@mui/material';
import { ListItemButton, TextField } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { HashLoader } from "react-spinners";
import useHooks from './hooks'

import './styles.css'

 const ResponsiveDrawer = (props) =>{
  
  const {
    headers,
    users,
    channels,
    handleClickOpenChannel,
    openChannel,
    loading,
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
    handleClickOpen,
    handleClose

  } = useHooks()  

  const drawerWidth = 300;
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;      

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
            <ListItemButton onClick={handleClickOpenChannel}>
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary={`My Channels (${channels ? channels.length : 0})`} /> 
              {/* edit soon to have ternary for channel count */}
              {openChannel ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openChannel} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              {channels ? channels.map((channel)=>{
                return (                                   
                  <ListItemButton sx={{ pl: 4 }} key={channel.id} onClick={()=>retrieveChannel(channel.id)}>
                  {/* console.log(channel) */}
                  <ListItemText  primary={`${channel.name}`}/>
                  </ListItemButton>   
                            
                )
              }) : <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText  primary={`No users Available`}/>
                  </ListItemButton>}              
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
        
            <ListItemButton onClick={()=>inviteUserToAChannel()}>
              <ListItemIcon>
              <GetAppIcon/>
              </ListItemIcon>
              <ListItemText primary="Invite User to a Channel" />              
              <AddIcon />
            </ListItemButton>
          </List> 

          <Divider />

          <List>
        
            <ListItemButton onClick={()=>createNewChannelWithUser()}>
              <ListItemIcon>
              <GetAppIcon/>
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
              <ListItemText primary={`All Users (reduced to ${users.slice(0, 20).length})`} />
              {openUsers ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUsers} timeout="auto" unmountOnExit>
              <List>
              {users.slice(0, 20).map((val)=>{
                return (
                <ListItemButton sx={{ pl: 4 }} key={val.id}>
                <ListItemText primary={`${val.uid}`} />
                </ListItemButton>
                )
              })}
              </List>
            </Collapse>
          </List>     

          <Divider />

    </div>
  );

  

  return (
      <>
    {loading ?
      <>             
    <div className="loader">
      <HashLoader loading={loading} color={"purple"} size={80}/> 
      <h3>Almost there...</h3>
      </div> 
      </>
      :
      <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        className="appbar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor: "purple", justifyContent: "space-between"}}>
          <IconButton            
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
     </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        <Box style={{display: "flex", flexDirection: "column", padding: "0 20px 150px "}}>
        {allMessagesRetrieved.map((val)=>{
          return (
            <span key={val.id}>
              {val.body}
            </span>
          )
        })}
        </Box>

        <Box className="message-area-container"
         component="form"        
         noValidate
         autoComplete="off"         
         onSubmit={(e)=>{e.preventDefault(); setMessage('')}}
         >           
        <TextField
            className="message-area"
            id="outlined-basic" label="Enter your message here" variant="outlined"            
            onChange={(e)=>setMessage(e.target.value)}
            value={message}            
            />      
        </Box> 
      </Box>     
    </Box>

    </>}

   </>
  );
}

export default ResponsiveDrawer
