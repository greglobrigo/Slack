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
    PeopleAltIcon,
    CgSlack,
  } = useHooks();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          justifyContent: "center",
        }}
      >
        <Toolbar className="chat-toolbar">
          <Typography variant="h6" noWrap component="div">
            <span className="chat-hd">
              <CgSlack />
              Avion Slack App
            </span>
          </Typography>
        </Toolbar>
      </AppBar>

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
          <ListItemButton className="list-item">
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="All Users" />
          </ListItemButton>
          <ListItemButton onClick={handleClickOpenChannel}>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Channels" />
            {openChannel ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          pt: 10,
          height: "20%",
        }}
      >
        <div className="messages-container">
          <p className="chat-area">
            111111111Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate error eos eveniet qui laborum doloremque porro,
            voluptate, omnis sunt at iure neque praesentium temporibus odit
            voluptates quis voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
          <p className="chat-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error eos eveniet qui laborum doloremque porro, voluptate, omnis
            sunt at iure neque praesentium temporibus odit voluptates quis
            voluptatem recusandae suscipit?
          </p>
        </div>

        <Box sx={{ height: "25%" }}>
          <textarea className="msg-area" value="sample message" />
        </Box>
      </Box>
    </Box>
  );
}
