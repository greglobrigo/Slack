import useSessionStorage from '../Home/useSessionStorage.js'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Hooks = () => {

  const [headers] = useSessionStorage('headers', [])
  const [userID] = useSessionStorage('userID', []);
  const [users, setUsers] = useState([])
  const [channels, setChannels] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')  
  const [allMessagesRetrieved, setAllMessagesRetrieved] = useState([])
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
   setOpen(true);
 };

  const handleClose = () => {
   setOpen(false);
 };

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
      }).then((res) => {setUsers(res.data.data); console.log(res.data.data)})
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
       }).then((res) => console.log("retrieve-channel status: " + res.status))
        .then(retrieveAllMessagesInAChannel(id))
        .then(setIsAChannelSelected(true)) 
        .catch((error) => {console.log(error)}) 

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
       }).then(res=>setAllMessagesRetrieved(res.data.data))               
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

  const createNewChannelWithUser = () => {

    axios({      
      url: 'http://206.189.91.54/api/v1/channels',
      data: {
        'name': `Craig's Channel`,
        'user_ids': [713, 429] // [] insert member id or id's here 
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

  const createDirectMessageToAUser = () => {

    axios({      
      url: `http://206.189.91.54/api/v1/messages`,
      data: { 
        'receiver_id': ``, //input user ID here
        'receiver_class': 'User',
        'body': '' //setState and value of form still need to be edited here
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

  return {

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
    open,
    setOpen,    
    handleClickOpen,
    handleClose,
    isAChannelSelected,
    selectedChannel,
    setSelectedChannel,
    createMessageInAChannel
  }

}

export default Hooks
