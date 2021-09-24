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
              <Link to="/chat">Chat App</Link> <button onClick= {()=>closeRouter()}>close</button>
            </li>            
          </ul>  
          <hr />    
           </div>   
           <Switch>           
            <Route exact path="/" component={Home}>
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