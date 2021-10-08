import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect  
} from "react-router-dom";
import Home from '../Home'
import Chat from '../Chat'
import useLocalStorage from "../Home/useLocalStorage";

const Routes = () => {
  const [isLoggedIn] = useLocalStorage('logged-in', false)

    return (
      <>
      <Router>              
           <Switch>           
            <Route exact path="/" component={()=> isLoggedIn ?  <Redirect to='/chat'/> : <Home/>}/>                         
            <Route exact path="/chat" component={Chat}>
              <Chat />
            </Route>          
          </Switch>       
      </Router>
      </>
    );
  }

export default Routes