import React, {useEffect, useState, useRef} from 'react';
import axios from "axios"

const Home = () => {
    
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
 
  // useEffect(()=>{
   
  //   loginUser()
   
      
  //   }, [])

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
    return (
       
    <div>      
    {/* <p>{post.email}</p>
    <p>{post.id}</p>     */}
    
    <input  onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="email"/>
    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="password"/>
    <button onClick={()=>logIn()} type="submit">Log in</button>
    {post.config && <p>Log in Success!</p>}
    <button onClick={()=>getAllUsers()} type="submit">Get all users</button>
    <ul>
      {users.data?.data.map((user, idx)=>{
        
        return (
          <li id={user.id}>{user.email}</li>
        )

      })}

      
    </ul>
    
  </div>
    )
}

export default Home


