import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Home from '../Home'
import Chat from '../Chat'

const Routes = () => {
    return (
      <Router>              
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