
import React, { useState } from "react";
import './../styles/App.css';

import LoginForm from "./LoginForm";
const App = () => {
 const [isLoggedIn,setLoggedIn]=useState(false);
  return (
    <div id="main">
      {isLoggedIn ? (
        <h1>You are logged in.</h1>
      ):(<LoginForm isLoggedIn={isLoggedIn} onLogin={()=>setLoggedIn(true)}/>)}
    </div>
   
  )
}

export default App
