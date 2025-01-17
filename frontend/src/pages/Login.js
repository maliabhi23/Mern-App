import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FetchDataCompo } from '../Components/FetchDataCompo';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
export const Login = () => {
  // State to store user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();

  // Hardcoded username and password
  const hardcodedUsername = "admin";
  const hardcodedPassword = "password123";

  // Handle form submission
  function submitHandler(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Check if entered username and password match the hardcoded values
     if (username === hardcodedUsername && password === hardcodedPassword) {
      alert("Login successful!");
        navigate("/FetchDataCompo");
    } else {
      alert("Invalid username or password");
    }
  }

  return (

    <div>
       <Header/>
     
      <div className='login-form'>
      <form onSubmit={submitHandler} className='forms'>
      <div className='login-text'>Login</div>
        <div>
          <label className="email">Username</label>
          <input 
            type="text" 
            value={username}
            className="input-field" 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label className="email">Password</label>
          <input             className="input-field"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div>
          <input type="submit"className="submitbtn" name="submit" />
        </div>
      </form>



      </div>
            <Footer/>
    </div>
  );
}
