import React from 'react';
import useHooks from './hooks'

const Home = () => {
    

    const {
        post,        
        users,        
        password,
        setPassword,
        email,
        setEmail,                
        logIn,        
        getAllUsers, 

    } = useHooks()

    console.log(post?.data?.data.id);
    return (   
            
    <div>     
     <input  onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="email"/>
    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="password"/>
    <button onClick={()=>logIn()} type="submit">Log in</button>
    {post.config && <p>Log in Success!</p>}
    <button onClick={()=>getAllUsers()} type="submit">Get all users</button>
    <ul>
      {users.data?.data.map((user, idx)=>{
        
        return (
          <li key={idx}>{user.email} <p>{user.id}</p></li>

        )

      })}

      
    </ul>
    
  </div>
    )
}

export default Home


