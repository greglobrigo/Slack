import ListItemButton from '@mui/material/ListItemButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import TextField  from "@mui/material/TextField";
import Box from '@mui/material/Box';
import FormDialoguesComponent from './FormDialoguesComponent';


const TopBarComponent = ({drawerWidth, headers, handleDrawerToggle, open, handleClose, channels, handleClickOpen, isAChannelSelected, selectedChannel, setSelectedChannel, inviteUserToAChannel}) => {
  return (
    <>
      <AppBar
        className="appbar"
        position="fixed"
        sx={{
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          ml: {sm: `${drawerWidth}px`},
        }}
      >
        <Toolbar
          style={{backgroundColor: "blue", justifyContent: "space-between"}}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>


          {selectedChannel.name && 
          <Box onClick={()=>handleClickOpen()}>
            <ListItemButton>
              <PersonAddIcon sx={{mr: 1}} />
              <Typography variant="h7" noWrap component="div">
                {`Invite to ${selectedChannel.name}`}
              </Typography>
            </ListItemButton>
          </Box>
          }

          <Box>
            <TextField
              label="Search All users..."
              sx={{m: 1, width: "25ch"}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
            />
          </Box>

          <Box style={{textAlign: "end"}}>
            <Typography variant="h12" component="div">
              {`${headers.uid}`}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Form Dialogues */}
      <FormDialoguesComponent
        selectedChannel={selectedChannel}        
        open={open}
        handleClose={handleClose}
        dialogTitleText1={selectedChannel && `Enter user ID to invite to ${selectedChannel.name}`}
        dialogTitleText2={""}
        channels={channels}
        inviteUserToAChannel={inviteUserToAChannel}
      />
    </>
  );
};

export default TopBarComponent
