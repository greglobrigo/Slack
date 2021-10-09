import { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorage from "../Home/useLocalStorage.js";

var req1;
var req2;

const Hooks = () => {
  const [headers] = useLocalStorage("headers", []);
  const [userID] = useLocalStorage("userID", []);
  const [users, setUsers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [allMessagesRetrieved, setAllMessagesRetrieved] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);  
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [channelMembers, setChannelMembers] = useState([])
  const [usersDisplayed, setUsersDisplayed] = useState({home: true, channel: false})  
  const [userStatus, setUserStatus] = useLocalStorage('status', {
    isLoggedIn: false,
    signedOut: false,
  })
  
  const withoutCurrentUser = users.filter(
    (user) => !user.email.includes(headers.uid)
  );
  const [isCreateChannel, setIsCreateChannel] = useState({
    success: false,
    failed: false,
  });

  const [userInviteError, setUserInviteError] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openChannel, setOpenChannel] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);

  const handleClickOpenChannel = () => {
    setOpenChannel(!openChannel);
  };

  const handleClickOpenUsers = () => {
    setOpenUsers(!openUsers);
  };

  const [selectedChannel, setSelectedChannel] = useState([]);

  const [stateSB, setStateSB] = useState({
    openSB: false,
    vertical: "top",
    horizontal: "center"
  });


// stores all the email in a channel
  // useEffect(() => {
  //   collectChannelEmailsArray(channelUsersId)
  // }, [channelUsersId]);

  // useEffect(() => {
  //   collectChannelEmails(channelEmailsArray);
  //   console.log(channelEmailsArray)
  // }, [channelEmailsArray]);

  // useEffect(() => {
  //   console.log(channelEmails)
  // }, [channelEmails]);
  

  useEffect(() => {
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const getAllUsers = () => {
      axios({
        url: "https://slackapi.avionschool.com/api/v1/users",
        data: {},
        method: "GET",
        headers: {
          "access-token": headers["access-token"],
          client: headers.client,
          expiry: headers.expiry,
          uid: headers.uid,
        },
      })
        .then((res) => {setUsers(res.data.data)})
        .catch((error) => {
          console.log(error);
        });
    };
    getAllUsers();

    const retrieveChannels = () => {
      axios({
        url: "https://slackapi.avionschool.com/api/v1/channels",
        data: {},
        method: "GET",
        headers: {
          "access-token": headers["access-token"],
          client: headers.client,
          expiry: headers.expiry,
          uid: headers.uid,
        },
      })
        .then((res) => setChannels(res.data.data))
        .catch((error) => {
          console.log(error);
        });
    };
    retrieveChannels();
    getCurrentTime();
  }, [headers]);

  const retrieveChannels = () => {
    axios({
      url: "https://slackapi.avionschool.com/api/v1/channels",
      data: {},
      method: "GET",
      headers: {
        "access-token": headers["access-token"],
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => setChannels(res.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const intervalRetrieveMessages = (id) => {
    clearTimeout(req1);
    clearTimeout(req2);    
    setSelectedUser([]);
    retrieveAllMessagesInAChannel(id);  
      req1 = setInterval(() => {
        retrieveAllMessagesInAChannel(id);
      }, 1500);  
  };

  const retrieveAllMessagesInAChannel = (id) => {
    axios({
      url: `https://slackapi.avionschool.com/api/v1/messages?receiver_id=${id}&receiver_class=Channel`,
      data: {},
      method: "GET",
      headers: {
        "access-token": headers["access-token"],
        expiry: headers.expiry,
        client: headers.client,
        uid: headers.uid,
      },
    })
      .then((res) => {setAllMessagesRetrieved(res.data.data); })
      .catch((error) => {
        console.log(error);
      });
  };


    //INVITE USER TO A CHANNEL
  const inviteUserToAChannel = (userEmail, handleClose, setValueFromForm) => {
    const extractedId = users.filter(user=>user.email===userEmail) 

    axios({
      url: "https://slackapi.avionschool.com/api/v1/channel/add_member",
      data: {
        id: `${selectedChannel.id}`,
        member_id: `${extractedId[0]?.id}`,
      },
      method: "POST",
      headers: {
        "access-token": headers["access-token"],
        expiry: headers.expiry,
        uid: headers.uid,
        client: headers.client,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          setUserInviteError(res.data.errors);            
        } else {
          setStateSB({ ...stateSB, openSB: true });          
          setValueFromForm('')
          setUserInviteError("");
          handleClose();
        }
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  //CREATE NEW CHANNEL
   const createNewChannelWithUser = (channelName, handleClose, setValueFromForm) => {
    axios({
      url: "https://slackapi.avionschool.com/api/v1/channels",
      data: {
        name: `${channelName}`,
        user_ids: [userID],
      },
      method: "POST",
      headers: {
        "access-token": headers["access-token"],
        expiry: headers.expiry,
        client: headers.client,
        uid: headers.uid,
      },
    })
      .then((res) => {
        retrieveChannels();
        if (res.data.data?.id) {
          setStateSB({ ...stateSB, openSB: true });                
          handleClose();
          setValueFromForm("");
          
        } else {
          const errors = res.data.errors;
          setIsCreateChannel({ failed: [...errors].join(". ") })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createMessageInAChannel = (message) => {
    axios({
      url: `https://slackapi.avionschool.com/api/v1/messages`,
      data: {
        receiver_id: `${selectedChannel.id}`,
        receiver_class: "Channel",
        body: `${message}`,
      },
      method: "POST",
      headers: {
        "access-token": headers["access-token"],
        expiry: headers.expiry,
        client: headers.client,
        uid: headers.uid,
      },
    })
      .then(retrieveAllMessagesInAChannel(selectedChannel.id))
      .catch((error) => {
        console.log(error);
      });
  };

  const retrieveAllMessagesWithUser = (userData) => {
    axios({
      url: `https://slackapi.avionschool.com/api/v1/messages?receiver_id=${userData.id}&receiver_class=User`,
      method: "GET",
      headers: {
        "access-token": headers["access-token"],
        expiry: headers.expiry,
        client: headers.client,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setAllMessagesRetrieved(res.data.data)
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const intervalRetrieveMessagesWithUser = (userData) => {
    clearTimeout(req1);
    clearTimeout(req2);
    setSelectedChannel([]);
    setSelectedUser(userData);
    retrieveAllMessagesWithUser(userData);
    setSearchResults([]);
         req2 = setInterval(() => {
        retrieveAllMessagesWithUser(userData);
      }, 1500);  
  };

  const createDirectMessageToAUser = (message) => {
    axios({
      url: `https://slackapi.avionschool.com/api/v1/messages`,
      data: {
        receiver_id: `${selectedUser.id}`,
        receiver_class: "User",
        body: `${message}`,
      },
      method: "POST",
      headers: {
        "access-token": headers["access-token"],
        expiry: headers.expiry,
        client: headers.client,
        uid: headers.uid,
      },
    }).catch((error) => {
      console.log(error);
    });
  };

  const retrieveChannelUsers = (id) => {

    axios({
      url: `https://slackapi.avionschool.com/api/v1/channels/${id}`,
      method: "GET",
      headers: {
        "access-token": headers["access-token"],
        expiry: headers.expiry,
        client: headers.client,
        uid: headers.uid,
      },
    })
      .then((res) => {        
        const channelMembers = res.data.data.channel_members.map(val=>val.user_id)        
        const filteredChannelMembers = users.filter(user=>channelMembers.includes(user.id))        
        setChannelMembers(filteredChannelMembers)
        setUsersDisplayed({home: false, channel: true})      
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const returnToHome = () => {
    setUsersDisplayed({home: true, channel: false})
    clearTimeout(req1);
    clearTimeout(req2);
    setAllMessagesRetrieved([]);
    setSelectedChannel([]);
    setSelectedUser([]);
  };

  const signOut = () => {    
    setUsersDisplayed({home: true, channel: false})      
    clearTimeout(req1);
    clearTimeout(req2);
    setAllMessagesRetrieved([]);
    setSelectedChannel([]);
    setSelectedUser([]);    
    setUserStatus({isLoggedIn: false, signedOut: true})    
  }

  const sortByEmail = (val) => {
    // setTimeout(() => {
      const sortedUsers = withoutCurrentUser.filter((value) =>
        value.email.includes(val)
      );
      setSearchResults(sortedUsers);
    // }, 500);
  };

  const [currentDateAndTime, setCurrentDateAndTime] = useState({
    currentTime: "",
    currentDate: "",
  });

  const getCurrentTime = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      var currentDay = weekday[d.getDay()];
      setCurrentDateAndTime({ currentTime: time, currentDate: currentDay });
    }, 1000);
  };

  return {
    loading,
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
    signOut,
    userStatus,
    setMobileOpen
  };
};

export default Hooks;
