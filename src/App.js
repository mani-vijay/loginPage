// filepath: /c:/Users/ManikantaVijayaKommu/React/my-react-login-app/src/App.js
import React from 'react';
import {Route , Switch} from "react-router-dom"
import LoginComponent from './components/LoginComponent';
//import './styles/App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path='/login' Component={LoginComponent}/>
      </Switch>
      
      
      
    </div>
  );
}

export default App;