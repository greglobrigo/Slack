import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SnackBarComponent from "./SnackbarComponent";
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import {RiSendPlaneFill} from 'react-icons/ri'
import { useRef, useEffect } from "react";


const ChatBodyComponent = ({
  allMessagesRetrieved,
  setMessage,
  message,
  createMessageInAChannel,
  selectedChannel,
  selectedUser,
  createDirectMessageToAUser,
  stateSB,
  setStateSB,
  getChannel,
  getEmail,
  hasScrolledUp,
  setHasScrolledUp,  
}) => {
  const lastMessage = useRef();  
  window.onscroll = () => {
    setHasScrolledUp(true)
  }
  useEffect(() => {     
    if(!hasScrolledUp){ 
      if (allMessagesRetrieved?.length >= 1) {
      lastMessage.current.scrollIntoView({ behavior: "smooth" });
      }  
    } 
  }, [allMessagesRetrieved, hasScrolledUp]);  
  
  return (
    <>    
    { getChannel && <SnackBarComponent
        stateSB={stateSB}
        messageSB={`Successfully Created Channel: ${getChannel}!`}
        setStateSB={setStateSB}
      />} 

    { getEmail && <SnackBarComponent
        stateSB={stateSB}
        messageSB={`Successfully Added User: ${getEmail}!`}
        setStateSB={setStateSB}
      />}

      <Box component="main"  className="chat-body">      
        <Toolbar />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",            
            width: '600px',            
          }}
        >
        
          {allMessagesRetrieved?.length >= 1
            ? allMessagesRetrieved.map((val, idx) => {
                return (                  
                  <div key={val.id} ref={idx+1 === allMessagesRetrieved.length ? lastMessage : undefined}>                         
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{padding: '12.5px 0', marginRight: "25px"}}>
                    <Avatar style={{backgroundColor: "purple"}}>{val.sender.email.slice(0, 1).toUpperCase()}</Avatar>           
                    </div>
                    <div style={{padding: '15px 0 12.5px 0'}}>
                    <p style={{margin: '0'}}> {`${val.sender.email.split("@")[0]} says:`}</p>
                    <p style={{margin: '0'}}>{val.body}</p>     
                    <p style={{margin: '0', fontSize: "12px"}}>{`${moment(val.created_at).fromNow()}`}</p>               
                    </div>
                  </div>                   
                  </div>
                );
              })
            : (selectedChannel.name && (
                <div className="greetings">
                <div className="no-chat-img"/> 
                <span>
                  Channel: {selectedChannel.name} has no messages.
                </span>
                </div>
              )) ||
              (selectedUser.email && (
                <span className="greetings">
                  You have no chat history with {selectedUser.email.split("@")[0]}. Send
                  him/her a message!
                </span>
              )) || (                                      
                <div className="greetings">                 
                <div className="home-img"/>    
                <span >
                  Welcome to Avion Slack App! Hop on a channel or send a DM to
                  get started!👀
                </span>                
                </div>                
              )}
        </Box>        
        {selectedChannel.name && (
          <Box
            className="message-area-container"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              setHasScrolledUp(false)
              createMessageInAChannel(message);
              setMessage("");    
              
            }}                        
          >
            <TextField
              className="message-area"
              id="outlined-basic"
              label="Enter your message here"
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div className="send-message-button"
             onClick={(e) => {
              e.preventDefault();
              setHasScrolledUp(false)
              createMessageInAChannel(message);
              setMessage("");
              
            }}>
            <RiSendPlaneFill size={40}/>
            </div>
          </Box>
        )}

        {selectedUser.email && (
          <Box
            className="message-area-container"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              setHasScrolledUp(false)
              createDirectMessageToAUser(message);
              setMessage("");
            }}
          >
            <TextField
              className="message-area"
              id="outlined-basic"
              label="Enter your message here"
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div className="send-message-button"
              onClick={(e) => {
              e.preventDefault();
              setHasScrolledUp(false)
              createDirectMessageToAUser(message);
              setMessage("");
            }}>
            <RiSendPlaneFill size={40}/>
            </div>

          </Box>
        )}
      </Box>
    </>
  );
};

export default ChatBodyComponent;
