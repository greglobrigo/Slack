import {useState, useEffect} from 'react'
import useSessionStorage from './useSessionStorage'
import axios from 'axios';

const Hooks = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 3000);
  }, [])

    const [post, setPost] = useSessionStorage('post', []);
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('')
    const [secondPassword, setSecondPassword] = useState('')    
    const [email, setEmail] = useState('')    
    const [isRegistering, setIsRegistering] = useState(false)
    const [route, setRoute] = useState(false)   
    const [validInfo, setValidInfo] = useState({
            passwordsDoNotMatch: false,
            invalidEmailFormat: false,
            emailIsEmpty: false,
            passwordIsEmpty: false,
            passwordTooShort: false,
        })
    const [isRegister, setIsRegister] = useState({
           successful: false,
           failed: false,           
        })
    const [isLogin, setIsLogin] = useState({
           successful: false,
           failed: false
        })
    
    

    const registerUser = async() => {      

        await axios({      
            url: 'http://206.189.91.54/api/v1/auth',
            data: {'email': email,
                  'password': password,
                  'password_confirmation': secondPassword},
            headers: {},
            method: 'POST',
            }).then((res) => {
                setPost(res)
                setIsRegister({successful:true})                
                resetUserInput()
            })
            .catch((error) => {
                console.log(error)
                setIsRegister({failed: true})
            })
        
    }

    const register = (e) => {
        e.preventDefault()
        if(!email.includes("@" && ".")) {            
        setValidInfo({invalidEmailFormat: true})}   
            else if (!password || !secondPassword){
            setValidInfo({passwordIsEmpty: true})}     
                 else if (password !== secondPassword) {
                setValidInfo({passwordsDoNotMatch: true})
                    } else if (password.length < 6) {
                      setValidInfo({passwordTooShort: true})
                    }
         else {         
           registerUser()
         }

    }

    const  loginUser = async() =>{

        await axios({      
        url: 'http://206.189.91.54/api/v1/auth/sign_in',
        data: {'email': email,
              'password': password},
        headers: {},
        method: 'POST',
        }).then((res) => {
            setPost(res)
            setIsLogin({successful:true})
            console.log(res?.data?.data?.email)
            transition()
            resetUserInput()
        })
        .catch((error) => {
            console.log(error)
            setIsLogin({failed: true})
        })

    
         //setPost(res.data?.data)
       //  console.log({res});      
       //  console.log({post});
        
    }    
 
   const logIn = (e) =>{   
     e.preventDefault()  
        if(!email) {
        setValidInfo({emailIsEmpty: true})
        } else if (!password){
            setValidInfo({passwordIsEmpty: true}) 
            } else if(!email.includes("@" && ".")) {            
             setValidInfo({invalidEmailFormat: true})                
                } else { 
             loginUser()
    }
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
       .catch((error) => {console.log(error)})
   }
 
   const getAllUsers = () => {
     getUsers()
   }

   const resetUserInput = () => {
     setEmail('')
     setPassword('')
     setSecondPassword('')
   }

   const transition = () => {
    setLoading(true)
    setTimeout(() => {setLoading(false); setRoute(true)}, 3000)
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
        setIsLogin,
        isLogin,
        isRegistering,
        setIsRegistering,
        secondPassword,
        setSecondPassword,
        register,
        registerUser,
        isRegister,
        setIsRegister,
        validInfo,
        setValidInfo,
        setLoading,
        loading,
        transition,
        route,
        setRoute        
    }   
}

export default Hooks
