"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteProduct = (props) => {
    const router = useRouter()
    // console.log(props)
    const pid = props.pid
    const handleDelete = async ()=>{
        let data = await fetch(`http://localhost:3000/api/products/${pid}`,{
            method:"Delete"
        })
        data = await data.json()
        if(data.success){
            alert(data.msg)
            router.push('/productslist')
        }else{
            alert(data.result)
        }
    }
  return (
    <button className='btn btn-danger' onClick={handleDelete}>Delete-Product</button>
  )
}

export default DeleteProduct