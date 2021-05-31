import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sale from './components/Sale';
import NavbarJS from './Navbar/NavbarJS';
function App() {
  return (
    <Router>
       <NavbarJS/>
         <Switch>
          <Route exact  path="/sale" component={Sale} />
        
             
           
        </Switch>
      </Router>
  
  );
}

export default App;
