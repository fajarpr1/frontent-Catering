
import axios from 'axios'
import './login.css';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from '../../Api';

const Userlogin = () => {


  const history=useNavigate();





  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try {


      await axios.post(baseUrl+"/userlogin", {
        email,password
      })

        .then(res=>{
          if (res.data=="exist"){
            history("/userhome",{state:{id:email}})
          }
          else if (res.data=="notexist") {
            alert("user have not signup")
          }
        })

        .catch(e=>{
          alert("Wrong details")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);
    }

  }


  return (
    <div className="container">
      
   
      <form action="POST">
      
      <h1>UserLogin</h1>
       <input type="email" onChange={(e)=> {setEmail(e.target.value) }} placeholder='Email' /><br></br>
      <div >
      <br></br>
      
         <br></br><input type="password" onChange={(e)=>{setPassword(e.target.value) }} placeholder='Password' />
        </div>
        <div className='form button'>
        <input type="submit" value="UserLogin" onClick={submit} />
        </div>
        <div className="link">
          <p>If you are a new user... Please </p>
      <Link  to="/signup">Signup</Link>
       </div>
      </form>
      
      



      







    </div>
  )
}

export default Userlogin