import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SnackBarComponent from "./SnackbarComponent";
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import {RiSendPlaneFill} from 'react-icons/ri'

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
}) => {
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
            ? allMessagesRetrieved.map((val) => {
                return (
                  <div key={val.id}>
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
                <span className="greetings">
                  Channel: {selectedChannel.name} has no messages.
                </span>
              )) ||
              (selectedUser.email && (
                <span className="greetings">
                  You have no chat history with {selectedUser.email.split("@")[0]}. Send
                  him/her a message!
                </span>
              )) || (
                <span className="greetings">
                  Welcome to Avion Slack App! Hop on a channel or send a DM to
                  get started!👀
                </span>
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
