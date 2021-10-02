import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Home from '../Home'
import Chat from '../Chat'

const Routes = () => {
    return (
      <>
      <Router>              
           <Switch>           
            <Route exact path="/" comp={Home}>
              <Home />
            </Route>            
            <Route exact path="/chat" comp={Chat}>
              <Chat />
            </Route>          
          </Switch>       
      </Router>
      </>
    );
  }

export default Routes