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
    inviteUserToAChannel,
    createNewChannelWithUser,
    handleClickOpenUsers,
    openUsers,
    handleDrawerToggle,
    mobileOpen,
    allMessagesRetrieved,
    message,
    setMessage,
    isAChannelSelected,
    selectedChannel,
    setSelectedChannel,
    createMessageInAChannel,
    intervalRetrieveMessages,
    userID,
    returnToHome,
    sortByEmail,
    searchResults,
    selectedUser,
    createDirectMessageToAUser,
    intervalRetrieveMessagesWithUser,
    loading,
    currentDateAndTime,
    channelExists,
    channelError,
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
          inviteUserToAChannel={inviteUserToAChannel}
          createNewChannelWithUser={createNewChannelWithUser}
          handleClickOpenUsers={handleClickOpenUsers}
          openUsers={openUsers}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          allMessagesRetrieved={allMessagesRetrieved}
          message={message}
          setMessage={setMessage}
          isAChannelSelected={isAChannelSelected}
          selectedChannel={selectedChannel}
          setSelectedChannel={setSelectedChannel}
          createMessageInAChannel={createMessageInAChannel}
          intervalRetrieveMessages={intervalRetrieveMessages}
          userID={userID}
          returnToHome={returnToHome}
          sortByEmail={sortByEmail}
          searchResults={searchResults}
          selectedUser={selectedUser}
          createDirectMessageToAUser={createDirectMessageToAUser}
          intervalRetrieveMessagesWithUser={intervalRetrieveMessagesWithUser}
          currentDateAndTime={currentDateAndTime}
          channelExists={channelExists}
          channelError={channelError}
        />
      )}
    </>
  );
};

export default Index;
