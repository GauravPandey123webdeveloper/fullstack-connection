import React, { useState } from "react";
import axios from "axios";
export default function App() {
  const [username,setUsername]=useState("");
  const [userpass,setUserPass]=useState("");
  const [err,setErr]=useState("");
  const handleClick = async () => {
    try {
      const response = await axios.get("http://localhost:8000/");
      console.log(response.data);
      alert("executed");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange=(e)=>{
    e.preventDefault();
    const check=e.target.name;
    if(check==='user'){
       setUsername(e.target.value);
    }else if(check==='password'){
      setUserPass(e.target.value);
    }
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!username){
      setErr("Enter username");
      return;
    }
    if(!userpass){
      setErr("Enter password");
      return;
    }
    try {
      const response= await axios.post("http://localhost:8000/createuser",{username,userpass},{headers:{"Content-Type":"application/json"}})
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={handleClick}>get data</button>
      {err&&(<p style={{color:"red"}}>{err}</p>)}
      <form onSubmit={handleSubmit}>
         <input type="text" value={username} name="user"placeholder="enter ur name" onChange={handleChange}></input>
         <input type="password" value={userpass} placeholder="enter ur password" onChange={handleChange}name="password" ></input>
         <button>submit</button>
      </form>
    </div>
  );
}
