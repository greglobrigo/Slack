import React from "react";
import Loaders from "./Loaders";
import useHooks from "./hooks";
import MainChatComponent from "./MainChatComponent";
import "./styles.css";

const Index = () => {
  const {
    headers,
    users,
    channels,
    handleClickOpenChannel,
    openChannel,
    loading,
    retrieveChannel,
    inviteUserToAChannel,
    createNewChannelWithUser,
    handleClickOpenUsers,
    openUsers,
    handleDrawerToggle,
    mobileOpen,
    allMessagesRetrieved,
    message,
    setMessage,
    open,
    setOpen,
    handleClickOpen,
    handleClose,
    isAChannelSelected,
    selectedChannel,
    setSelectedChannel,
    createMessageInAChannel,
    intervalRetrieveMessages,
    userID,
    retrieveAllMessagesWithUser,
<<<<<<< HEAD
  } = useHooks();

  return (
    <>
      {loading ? (
        <Loaders loading={loading} />
      ) : (
        <MainChatComponent
          headers={headers}
          users={users}
          channels={channels}
          handleClickOpenChannel={handleClickOpenChannel}
          openChannel={openChannel}
          retrieveChannel={retrieveChannel}
          inviteUserToAChannel={inviteUserToAChannel}
          createNewChannelWithUser={createNewChannelWithUser}
          handleClickOpenUsers={handleClickOpenUsers}
          openUsers={openUsers}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          allMessagesRetrieved={allMessagesRetrieved}
          message={message}
          setMessage={setMessage}
          open={open}
          setOpen={setOpen}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          isAChannelSelected={isAChannelSelected}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
          createMessageInAChannel={createMessageInAChannel}
          intervalRetrieveMessages={intervalRetrieveMessages}
          userID={userID}
          retrieveAllMessagesWithUser={retrieveAllMessagesWithUser}
        />
      )}
    </>
=======
    returnToHome,
    sortByEmail,
    searchResults,
    selectedUser,
    createDirectMessageToAUser,
    intervalRetrieveMessagesWithUser

  } = useHooks()  
      

  return (
      <>
    {loading ?               
      <Loaders
        loading={loading}
      />      
      :
     <MainChatComponent
    headers={headers}
    users={users}
    channels={channels}
    handleClickOpenChannel={handleClickOpenChannel}
    openChannel={openChannel}    
    retrieveChannel={retrieveChannel}
    inviteUserToAChannel={inviteUserToAChannel}
    createNewChannelWithUser={createNewChannelWithUser}
    handleClickOpenUsers={handleClickOpenUsers}
    openUsers={openUsers}
    handleDrawerToggle={handleDrawerToggle}
    mobileOpen={mobileOpen}
    allMessagesRetrieved={allMessagesRetrieved}
    message={message}
    setMessage={setMessage}
    open={open}
    setOpen={setOpen}
    handleClickOpen={handleClickOpen}
    handleClose={handleClose}
    isAChannelSelected={isAChannelSelected}
    selectedChannel={selectedChannel}
    setSelectedChannel={setSelectedChannel}
    createMessageInAChannel={createMessageInAChannel}
    intervalRetrieveMessages={intervalRetrieveMessages}
    userID={userID}
    retrieveAllMessagesWithUser={retrieveAllMessagesWithUser}
    returnToHome={returnToHome}
    sortByEmail={sortByEmail}
    searchResults={searchResults}
    selectedUser={selectedUser}
    createDirectMessageToAUser={createDirectMessageToAUser}
    intervalRetrieveMessagesWithUser={intervalRetrieveMessagesWithUser}
      />
     }

   </>
>>>>>>> main
  );
};

export default Index;
