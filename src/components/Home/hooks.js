import {useState} from 'react'
import axios from 'axios';

const Hooks = () => {

    const [post, setPost] = useState([]);
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const  loginUser = async() =>{

        await axios({      
        url: 'http://206.189.91.54/api/v1/auth/sign_in',
        data: {'email': email,
              'password': password},
        headers: {},
        method: 'POST',
        }).then((res) => setPost(res)) //setPost(res.data?.data)
       //  console.log({res});      
       //  .catch((error) => {console.log(error)})    
       //  console.log({post});
    }
 
   const logIn = () =>{ 
     
     loginUser()     
    
   } 
 
   const getUsers = async() => {
 
       await axios({      
       url: 'http://206.189.91.54/api/v1/users',
       data: {},
       headers: {
         'access-token': post?.headers?.["access-token"],
         'client': post?.headers?.client,
         'expiry': post?.headers?.expiry,
         'uid': post?.headers?.uid
     },
       method: 'GET',
       }).then((res) => setUsers(res))
   }
 
   const getAllUsers = () => {
     getUsers()
   }

    return {
        post,        
        users,        
        password,
        setPassword,
        email,
        setEmail,                
        logIn,        
        getAllUsers,   
    }
      
    
}

export default Hooks
