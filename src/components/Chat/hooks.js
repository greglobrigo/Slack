import { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ForumIcon from "@mui/icons-material/Forum";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import { ListItemButton } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";



const Hooks = () => {
  const [openChannel, setOpenChannel] = useState(true);
  const [openMessage, setOpenMessage] = useState(true);

  const handleClickOpenChannel = () => {
    setOpenChannel(!openChannel);
  };

  const handleClickOpenMessage = () => {
    setOpenMessage(!openMessage);
  };

  return {
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
  };
};

export default Hooks;
