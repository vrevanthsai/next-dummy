'use client'
import React, { useState } from 'react'

const AddUser = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    const handleAddUser = async () =>{
        // console.log(name,age,email)
        let data = await fetch('http://localhost:3000/api/users',
            {
                method:"Post",
                body:JSON.stringify({name,age,email})
            }
        )
        data = await data.json();
        if(data.success){
            // alert("new user added")
            alert(data.result)
        }else{
            // alert("some error occured")
            alert(data.result)
        }
        console.log(data)
    }

  return (
    <div className='container post-form'>
        <h1>AddUser with POST API</h1>
        <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='number' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)}/>
        <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button className='btn btn-primary' onClick={handleAddUser}>Add USer</button>
    </div>
  )
}

export default AddUser