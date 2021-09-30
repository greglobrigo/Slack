import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField  from "@mui/material/TextField";

const ChatBodyComponent = ({allMessagesRetrieved, setMessage, message, createMessageInAChannel, selectedChannel, selectedUser, createDirectMessageToAUser}) => {
    return (
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <Toolbar />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 20px 150px ",
            }}
          >
            {allMessagesRetrieved?.length >= 1 ? allMessagesRetrieved.map((val) => {
              return (
              <div key={val.id}>
              <span>
             {`${val.sender.email} says at ${val.created_at}: `}</span>   
             <p>{val.body}</p>
             </div>              
              )
            }) : 
            
            (selectedChannel.name && <span className="greetings">Channel: {selectedChannel.name} has no messages.</span>) || 
            (selectedUser.email && <span className="greetings">You have no chat history with {selectedUser.email}. Send him/her a message!</span>) ||            
            <span className="greetings">Welcome to Avion Slack App! Hop on a channel or send a DM to get started!👀</span>}

            


          </Box>

          {selectedChannel.name && <Box
            className="message-area-container"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {e.preventDefault(); createMessageInAChannel(message); setMessage("")}}
          >
            <TextField
              className="message-area"
              id="outlined-basic"
              label="Enter your message here"
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Box>}

          {selectedUser.email && <Box
            className="message-area-container"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {e.preventDefault(); createDirectMessageToAUser(message); setMessage("")}}
          >
            <TextField
              className="message-area"
              id="outlined-basic"
              label="Enter your message here"
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Box>}
        </Box>
    )
}

export default ChatBodyComponent
