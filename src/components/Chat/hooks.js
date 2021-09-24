import { useState } from "react";

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
  };
};

export default Hooks;
