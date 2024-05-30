'use client'
import { Are_You_Serious } from 'next/font/google'
import React from 'react'

const DeleteUser = (props) => {
    const uid = props.id

    const handleDelete = async () =>{
        // console.log(uid)
        let data = await fetch(`http://localhost:3000/api/users/${uid}`,{
            method:"delete"
        })
        data = await data.json();
        if(data.success){
            alert(data.result)
        }else{
            alert(data.result)
        }
    }

  return (
    <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
  )
}

export default DeleteUser