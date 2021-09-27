import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField  from "@mui/material/TextField";

const ChatBodyComponent = ({allMessagesRetrieved, setMessage, message, createMessageInAChannel}) => {
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
            {allMessagesRetrieved.map((val) => {
              return (
              <div key={val.id}>
              <span>
             {`${val.sender.email} says: `}</span>   
             <p>{val.body}</p>
             </div>              
              )
            })}
          </Box>

          <Box
            className="message-area-container"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              createMessageInAChannel(message)
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
          </Box>
        </Box>
    )
}

export default ChatBodyComponent
