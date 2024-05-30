"use client";

import { useEffect, useState } from "react";

const UpdateUser = ({ params }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  // console.log(params)
  let uid = params.userid;
    // initial call
    useEffect(()=>{
        getUser();
    },[])

  // get initial user data with its id
  const getUser = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${uid}`);
    data = await data.json();
    setName(data.result.name)
    setAge(data.result.age)
    setEmail(data.result.email)
  };

  // update form
  const handleUpdateUser = async () => {
    // console.log(name, age, email, uid);
    let data = await fetch(`http://localhost:3000/api/users/${uid}`,{
        method:"Put",
        body:JSON.stringify({name,age,email})
    }) 
    data = await data.json();
    console.log(data);
    if(data.success){
        alert(data.message)
    }else{
        alert(data.result)
    }
  };

  return (
    <div className="container post-form">
      <h1>Update user details with PUT-API</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleUpdateUser}>
        UPDATE USer
      </button>
    </div>
  );
};

export default UpdateUser;
