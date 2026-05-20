import React, { useState } from "react";
function LoginForm({isLoggedIn,onLogin}){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username.trim() && password.trim()){
            onLogin();
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Parent Component</h1>
            <div>
                <label>Username:</label>
                <input
                type="text"
                id='username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                type="password"
                id='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    )

}
export default LoginForm;