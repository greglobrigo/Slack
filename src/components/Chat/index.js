import * as React from "react";
import "./index.css";
import useHooks from "./hooks";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const {
    openChannel,
    openMessage,
    handleClickOpenChannel,
    handleClickOpenMessage,
    Box,
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItemIcon,
    ListItemText,
    ForumIcon,
    ChatBubbleIcon,
    ListItemButton,
    ExpandLess,
    ExpandMore,
    Collapse,
  } = useHooks();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Avion School
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <div className="profile-pic">Profile pic area</div>

          <Divider />
          <List>
            <ListItemButton onClick={handleClickOpenChannel}>
              <ListItemIcon>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="Channels" />
              {openChannel ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>{" "}
            <Collapse in={openChannel} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Channel 1" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Channel 2" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Channel 3" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <Divider />

          <List>
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
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}
