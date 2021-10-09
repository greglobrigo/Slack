import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FormDialoguesComponent from "./FormDialoguesComponent";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from '@mui/icons-material/Logout';
import SignOutComponent from './SignOutComponent'
import Avatar from '@mui/material/Avatar';
import {Redirect} from "react-router-dom";
import {GrClose} from 'react-icons/gr'



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
  retrieveChannelUsers,  
  userStatus,
  headers,
  signOut,
  setMobileOpen
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
  //sign-out
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>   
    {userStatus.signedOut && <Redirect to="/" />}
     <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} sx={{bgcolor: "purple"}}>
          <span style={{color: 'white'}}>Avion Slack App</span>
           <GrClose className="toolbar-close-button" onClick={()=>setMobileOpen(false)}/>
     </Toolbar>  
      <div className="sidebar-container channel-list">


      <div className="side-navigation" style={{backgroundColor:"#b491c8"}}> 

      <List>

          <ListItemButton className="side-navigation-item" onClick={() => {returnToHome()}}>            
          <HomeIcon />              
          <span style={{fontSize:"0.75rem"}}>  
          Home
          </span>                
          </ListItemButton>

          <ListItemButton className="side-navigation-item" onClick={() => handleClickOpenForInviteUser()}>
            <GroupAddIcon />                      
            <span style={{fontSize:"0.75rem"}}>  
            Add
          </span> 
          <span style={{fontSize:"0.75rem"}}>  
            Channel
          </span> 
          </ListItemButton>
          
          <ListItemButton className="side-navigation-item" onClick={() => handleClickOpenSendDirectMessage()}>            
              <ForumIcon />    
          <span style={{fontSize:"0.75rem"}}>  
          Direct
          </span> 
          <span style={{fontSize:"0.75rem"}}>  
             Message
          </span>        
          </ListItemButton>

     </List>

     <List>

     <ListItemButton className="side-navigation-item sign-out-button" onClick={() => {setOpen(true)}}>            
          <LogoutIcon />              
          <span>
          Sign Out
          </span>                
          </ListItemButton>


     </List>

       
      

        </div>




      <div className="main-sidebar">    
        <List>   
            <div style={{display: 'flex'}}>                   
              <GroupIcon sx={{mt: 0.5, mr: 1}} />            
            <ListItemText
              primary={`Channels (${channels ? channels.length : 0})`}/>    
              </div>
              
            <List component="div" disablePadding>           
              {channels ? (
                channels.map((channel) => {
                  return (<div key={channel.id}>
                    
                    <ListItemButton 
                      sx={{ pl: 4 }}
                     
                      onClick={() => {
                        intervalRetrieveMessages(channel.id);
                        setSelectedChannel(channel);
                        retrieveChannelUsers(channel.id)
                      }}
                    >
                      <ListItemText primary={`# ${channel.name}`} />
                    </ListItemButton>
                    
                    </div> );
                })
              ) : (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={`No users Available`} />
                </ListItemButton>
              )}              
            </List>
           
              
          {/* </Collapse> */}
        </List>

        

        <List>
         
        </List>

        


        

        {/* <List>
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
        </List> */}

        
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
      <SignOutComponent
      open={open}
      setOpen={setOpen}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      Avatar={Avatar}
      userStatus={userStatus}
      headers={headers}
      signOut={signOut}      
      />


    </>
  );
};

export default SidebarComponent;
