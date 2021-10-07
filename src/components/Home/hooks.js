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

    const [headers, setHeaders] = useSessionStorage('headers', [])
    const [userID, setUserID] = useSessionStorage('userID', []);
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
    
        
    const registerUser = () => {      

         axios({      
            url: 'https://slackapi.avionschool.com/api/v1/auth',
            data: {'email': email,
                  'password': password,
                  'password_confirmation': secondPassword},
            headers: {},
            method: 'POST',
            }).then(() => {                
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

    const  loginUser = () =>{

       axios({      
        url: 'https://slackapi.avionschool.com/api/v1/auth/sign_in',
        data: {'email': email,
              'password': password},
        headers: {},
        method: 'POST',
        }).then((res) => {          
          setUserID(res.data.data.id)
          setHeaders(res.headers)
          transition()
          resetUserInput()          
        })   
        .catch((error) => {
            console.log(error)
            setIsLogin({failed: true})
        })         
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


   const resetUserInput = () => {
     setEmail('')
     setPassword('')
     setSecondPassword('')
   }

   const transition = () => {
    setLoading(true)
    setTimeout(() => {setLoading(false); setRoute(true)}, 2000)
   }

    return {               
        password,
        setPassword,
        email,
        setEmail,                
        logIn,                
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
        setRoute,          
    }   
}

export default Hooks
