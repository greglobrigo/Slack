import useSessionStorage from '../Home/useSessionStorage.js'
import { useState, useEffect } from 'react';
import axios from 'axios'

var req1;
var req2;
var req3;
var req4;

const Hooks = () => {  

  const [headers] = useSessionStorage('headers', [])
  const [userID] = useSessionStorage('userID', []);
  const [users, setUsers] = useState([])
  const [channels, setChannels] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')  
  const [allMessagesRetrieved, setAllMessagesRetrieved] = useState([])
  const [mobileOpen, setMobileOpen] = useState(false);
  const [duplicate, setDuplicate] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [selectedUser, setSelectedUser] = useState([])
  const [duplicateForDM, setDuplicateForDM] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [openChannel, setOpenChannel] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);

  const handleClickOpenChannel = () => {
    setOpenChannel(!openChannel);
  };

  const handleClickOpenMessage = () => {
    setOpenMessage(!openMessage);
  };

  const handleClickOpenUsers = () => {
    setOpenUsers(!openUsers)
  }



  const [isAChannelSelected, setIsAChannelSelected] = useState(false)
  const [selectedChannel, setSelectedChannel] = useState([])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 2000);
  }, []) 
    
  useEffect(() => {    

    const getAllUsers = () => {
    axios({      
      url: 'http://206.189.91.54/api/v1/users',
      data: {},
      method: 'GET',
      headers: {
        'access-token': headers["access-token"],
        'client': headers.client,
        'expiry': headers.expiry,
        'uid': headers.uid
    },      
      }).then((res) => {setUsers(res.data.data); console.log(JSON.stringify(res.data.data))})
      .catch((error) => {console.log(error)}) 
    }
    getAllUsers()

    
    const retrieveChannels = () => {
    axios({      
      url: 'http://206.189.91.54/api/v1/channels',
      data: {},
      method: 'GET',
      headers: {
        'access-token': headers["access-token"],
        'client': headers.client,
        'expiry': headers.expiry,
        'uid': headers.uid
      },
       }).then((res) => {setChannels(res.data.data); console.log(res.data.data)})
         .catch((error) => {console.log(error)}) 
    }
    retrieveChannels()

  }, [headers])   

  const retrieveChannels = () => {
    axios({      
      url: 'http://206.189.91.54/api/v1/channels',
      data: {},
      method: 'GET',
      headers: {
        'access-token': headers["access-token"],
        'client': headers.client,
        'expiry': headers.expiry,
        'uid': headers.uid
      },
       }).then((res) => {setChannels(res.data.data); console.log(res.data.data)})
         .catch((error) => {console.log(error)}) 
    } 

  const retrieveChannel = (id) => {

    axios({      
      url: `http://206.189.91.54/api/v1/channels/${id}`,
      data: {},
      method: 'GET',
      headers: {
        'access-token': headers["access-token"],
        'client': headers.client,
        'expiry': headers.expiry,
        'uid': headers.uid
      },
       }).then((res) => console.log(res))
        .then(retrieveAllMessagesInAChannel(id))
        .then(setIsAChannelSelected(true)) 
        .catch((error) => {console.log(error)}) 
  }
  
  
  const intervalRetrieveMessages = (id) => {  
    clearTimeout(req3)
    clearTimeout(req4)  
    setSelectedUser([])
    retrieveAllMessagesInAChannel(id)          
    setDuplicate(!duplicate)
    if(duplicate) {
       req1 = setInterval(() => {
        retrieveAllMessagesInAChannel(id)  
      }, 1500);
      clearTimeout(req2)
    } else {
       req2 = setInterval(() => {
        retrieveAllMessagesInAChannel(id)  
      }, 1500);
      clearTimeout(req1)
    }   
  }

  const retrieveAllMessagesInAChannel= (id) => {

    axios({      
      url: `http://206.189.91.54/api/v1/messages?receiver_id=${id}&receiver_class=Channel`,
      data: { },
      method: 'GET',
      headers: {
        'access-token': headers["access-token"],
        'expiry': headers.expiry,
        'client': headers.client,
        'uid': headers.uid
      },
       }).then(res=>{setAllMessagesRetrieved(res.data.data); console.log(res)})  
         .catch((error) => {console.log(error)})
  } 

  const inviteUserToAChannel = (memberID) => {    

    axios({      
      url: 'http://206.189.91.54/api/v1/channel/add_member',
      data: {
        'id': `${selectedChannel.id}`,
        'member_id': `${memberID}`
      },
      method: 'POST',
      headers: {
        'access-token': headers["access-token"],
        'expiry': headers.expiry,
        'uid': headers.uid,
        'client': headers.client
      },
       }).then((res) => console.log(res)) //state still to be edited
         .catch((error) => {console.log(error)})    
  }

  const createNewChannelWithUser = (channelName) => {

    axios({      
      url: 'http://206.189.91.54/api/v1/channels',
      data: {
        'name': `${channelName}`,
        'user_ids': [userID] // [] insert member id or id's here 
      },
      method: 'POST',
      headers: {
        'access-token': headers["access-token"],
        'expiry': headers.expiry,
        'client': headers.client,
        'uid': headers.uid
      },
       }).then(() => retrieveChannels()) //state still to be edited         
         .catch((error) => {console.log(error)})
  }


  const createMessageInAChannel = (message) => {

    axios({      
      url: `http://206.189.91.54/api/v1/messages`,
      data: { 
        'receiver_id': `${selectedChannel.id}`,
        'receiver_class': 'Channel',
        'body': `${message}`
      },
      method: 'POST',
      headers: {
        'access-token': headers["access-token"],
        'expiry': headers.expiry,
        'client': headers.client,
        'uid': headers.uid
      },
       }).then(retrieveAllMessagesInAChannel(selectedChannel.id))
         .catch((error) => {console.log(error)})
  }


  const retrieveAllMessagesWithUser = (userData) => {

    axios({      
      url: `http://206.189.91.54/api/v1/messages?receiver_id=${userData.id}&receiver_class=User`,     
      method: 'GET',
      headers: {
        'access-token': headers["access-token"],
        'expiry': headers.expiry,
        'client': headers.client,
        'uid': headers.uid
      },
       }).then((res) => {setAllMessagesRetrieved(res.data.data)})   
         .then(console.log(userData)) 
         .catch((error) => {console.log(error)})
  }

  const intervalRetrieveMessagesWithUser = (userData) => {  
    clearTimeout(req1)
    clearTimeout(req2)
    setSelectedChannel([])
    setSelectedUser(userData)
    retrieveAllMessagesWithUser(userData)          
      setDuplicateForDM(!duplicateForDM)
      if(duplicateForDM) {
         req3 = setInterval(() => {
          retrieveAllMessagesWithUser(userData)  
        }, 1500);
        clearTimeout(req4)
      } else {
         req4 = setInterval(() => {
          retrieveAllMessagesWithUser(userData)  
        }, 1500);
        clearTimeout(req3)
      }  
  }

  const createDirectMessageToAUser = (message) => {

    axios({      
      url: `http://206.189.91.54/api/v1/messages`,
      data: { 
        'receiver_id': `${selectedUser.id}`,
        'receiver_class': 'User',
        'body': `${message}`
      },
      method: 'POST',
      headers: {
        'access-token': headers["access-token"],
        'expiry': headers.expiry,
        'client': headers.client,
        'uid': headers.uid
      },
       }).then((res) => console.log(res)) //state still to be edited
         .catch((error) => {console.log(error)})
  }

  const returnToHome = () => {
      clearTimeout(req1)
      clearTimeout(req2)
      clearTimeout(req3)
      clearTimeout(req4)
      setAllMessagesRetrieved([])
      setSelectedChannel([])
      setSelectedUser([])
  }


  const sortByEmail = (e) => {   
      setTimeout(() => {
      const sortedUsers = users.filter(user=>user.email.includes(e))
      setSearchResults(sortedUsers)       
    }, 500)
  }

  return {
    userID,
    headers,
    users,
    channels,
    handleClickOpenChannel,
    openChannel,
    loading,
    setLoading,
    setUsers,
    setChannels,
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
    isAChannelSelected,
    selectedChannel,
    setSelectedChannel,
    createMessageInAChannel,
    intervalRetrieveMessages,
    retrieveAllMessagesWithUser,
    returnToHome,
    sortByEmail,
    searchResults,
    selectedUser,
    createDirectMessageToAUser,
    intervalRetrieveMessagesWithUser    
  }

}

export default Hooks
