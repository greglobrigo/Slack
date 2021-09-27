import ListItemButton from '@mui/material/ListItemButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Toolbar from '@mui/material/Toolbar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import TextField  from "@mui/material/TextField";
import Box from '@mui/material/Box';

const TopBarComponent = ({drawerWidth, headers, handleDrawerToggle}) => {
    return (
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
          
          <Box>
          <ListItemButton>            
            <PersonAddIcon sx={{ mr: 1}}/>            
          <ListItemText variant="h7" noWrap component="div">
            {`Invite`}            
          </ListItemText>
          </ListItemButton>
          </Box>              

          <Box>  
          <TextField        
              label="Search All users..."
              sx={{ m: 1, width: '25ch' }}      
              InputProps={{
              startAdornment: (
          <InputAdornment position="start">
              <SearchIcon />
          </InputAdornment>)}}
              variant="filled"
          />
          </Box>

          <Box style={{textAlign: 'end'}}> 
            <Typography variant="h12" component="div">
              {`${headers.uid}`}
            </Typography>
           </Box> 

        </Toolbar>
      </AppBar>
    )
}

export default TopBarComponent
