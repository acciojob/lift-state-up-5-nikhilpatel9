
import React, { useState } from "react";
import './../styles/App.css';

import LoginForm from "./LoginForm";
const App = () => {
 const [isLoggedIn,setLoggedIn]=useState(false);
  return (
    <div id="main">
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ):(<LoginForm isLoggedIn={isLoggedIn} onLogin={()=>setLoggedIn(true)}/>)}
    </div>
   
  )
}

export default App
