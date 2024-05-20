import React from "react";
import { useState } from "react";


export default function Contact() {
  const [user,setuser]=useState({
name:"",
last:"",
mob:"",
  })
  const [heading,setheading]=useState('')
  let name,value;
  const changedata=(event)=>{
name=event.target.name;
value=event.target.value;
setuser({...user,[name]:value})
  }
const postDataonFirebase=async (e)=>{
e.preventDefault();
if(user.name&& user.last &&user.mob){
  let res=await fetch('https://datastore-e5bee-default-rtdb.firebaseio.com/storemydata.json',
  {
  method:"POST",
  header:"Content-Type:application/json",
  body:JSON.stringify({
    name:user.name,
    last:user.last,
    mob:user.mob,
  })
  
  }
  
  )
  if(res){
    setuser({
      name:"",
      last:"",
      mob:""
    })
  }
  alert("Data is stored")
  setheading(user.name);
}
else{
alert("Plz enter the data")
}

}
  return (
    <>
    <p className="welcome">Welcome sir</p> 
    <div className="welcome-bar">
    {heading}
    </div>
      <div className="contact-box">
        <div class="contact-box1">
        <h1 className="contact-head">Contact us</h1>
        <form method="POST">
          <p>
            Name:{" "}
            <input
              type="text"
              className="contact-input"
              placeholder="          Enter the name" name="name" value={user.name}  onChange={changedata} required
            ></input>
          </p>
          <p>
            Last:{" "}
            <input
              type="text"
              className="contact-input1"
              placeholder="         Enter the last-name"name="last" value={user.last} onChange={changedata} required
            ></input>
          </p>
          <p>
            Mob:{" "}
            <input
              type="number"
              className="contact-input2"
              placeholder="   Enter the Mobile-number" name="mob" value={user.mob}  onChange={changedata} required
            ></input>
          </p>
          <button className="submit-button" type="submit" onClick={postDataonFirebase}>Submit</button>
          <button className="submit-button1" type="reset">Reset</button>
        </form>
        <p className="or-name">or</p>
        <div className="contact-logo">
       
<a href="https://www.instagram.com/accounts/login"><i class="fa-brands fa-square-instagram"></i></a>
<a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
<a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i>  </a>
        </div>
        </div>
      </div>
     
    </>
  );
}
