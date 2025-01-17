import React from 'react'
import { Route,Link } from 'react-router-dom';
export const Header = () => {
  return (
    
    <div>  

     <header class="head">
        <nav class="head-inside">

        {/* <div class='head-first'>
            <a href="/">Home</a>
            <a href="/Aboutus">About Us</a>
            <a href="/Contactus">Contact Us</a>
            <a href="/feedback">Feedback</a>
        </div> */}

        
     <div className='head-first'>
        <Link to="/">Home</Link> 
        <Link to="/Aboutus">About Us</Link>  
        <Link to="/Contactus">Contact Us</Link>  
        <Link to="/Feedback">Feedback</Link> 
        {/* <Link to="/Login">Login</Link> */}
      </div>

        <div className='head-second'>
              <Link to="/Login">Login</Link>
        </div>

      </nav>
</header>

</div>
  )
}
