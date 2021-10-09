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
    isCreateChannel,
    setIsCreateChannel,
    userInviteError,
    setUserInviteError,
    stateSB,
    setStateSB,
    retrieveChannelUsers,
    channelMembers,
    usersDisplayed,
    userStatus,
    signOut,
    setMobileOpen
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
          isCreateChannel={isCreateChannel}
          setIsCreateChannel={setIsCreateChannel}
          userInviteError={userInviteError}
          setUserInviteError={setUserInviteError}
          stateSB={stateSB}
          setStateSB={setStateSB}
          retrieveChannelUsers={retrieveChannelUsers}
          channelMembers={channelMembers}
          usersDisplayed={usersDisplayed}
          userStatus={userStatus}
          signOut={signOut}
          setMobileOpen={setMobileOpen}
        />
      )}
    </>
  );
};

export default Index;
