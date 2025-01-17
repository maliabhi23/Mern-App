import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Route,Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Main from "./Components/Main"
  
import {Home} from "./pages/Home";

import {Aboutus} from "./pages/Aboutus";
import {Contactus} from "./pages/Contactus";
import {Feedback} from "./pages/Feedback";
import {Login} from "./pages/Login";
import { FetchDataCompo } from './Components/FetchDataCompo';

function App() {

  

  return (
    <div className="container">
      {/* <h3>helo t m</h3> */}
      {/* <Main/> */}
     {/* <Routes>
      <Route path="/" element={<Homepage/>}></Route>
     </Routes> */}

{/*      
     <nav>
        <Link to="/">Home</Link> 
        <Link to="/Aboutus">About Us</Link>  
        <Link to="/Contactus">Contact Us</Link>  
        <Link to="/Feedback">Feedback</Link> 
        <Link to="/Login">Login</Link>
      </nav> */}

      <div className='content'>
        <Routes>
        {/* simple the props passed  */}
          <Route path='/' element={<Home title="Welcome to the aswad hotel ttt"/>}> </Route>
          <Route   path='/Aboutus' element={<Aboutus/>}> </Route>
          <Route path='/Contactus' element={<Contactus/>}> </Route>
          <Route path='/FetchDataCompo' element={<FetchDataCompo/>}> </Route> 
          <Route path='/Feedback' element={<Feedback/>}> </Route>
          <Route path='/Login' element={<Login/>}> </Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
