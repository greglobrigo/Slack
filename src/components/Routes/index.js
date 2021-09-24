import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home'
import Chat from '../Chat'

const Routes = () => {

    const [displayed, setDisplay] = useState(true)
    const closeRouter = () => {
        setDisplay(false)

    }

    return (
      <Router>
        <div onClick= {()=>closeRouter()} style={{display: displayed ? 'block' : 'none'}}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>          
            <li>
              <Link to="/chat">Chat App</Link>
            </li>            
          </ul>  
          <hr />    
           </div>    
          <Switch>
            <Route exact path="/home" component={Home}>
              <Home />
            </Route>            
            <Route exact path="/chat" component={Chat}>
              <Chat />
            </Route>          
          </Switch>       
      </Router>
    );
  }

export default Routes