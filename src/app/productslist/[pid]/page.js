'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const UpdateProduct = ({params}) => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [company,setCompany] = useState("");
    const [color,setColor] = useState("");
    const [category,setCategory] = useState("");
    const router = useRouter()

    useEffect(()=>{
        getProduct();
        // eslint-disable-next-line
    },[])

    // console.log(params.pid)
    const pid = params.pid

    // initial values or Populate form data
    const getProduct = async ()=>{
        let data = await fetch(`http://localhost:3000/api/products/${pid}`)
        data = await data.json();
        if(data.success){
           setName(data.result.name)
           setPrice(data.result.price)
           setCompany(data.result.company)
           setColor(data.result.color)
           setCategory(data.result.category)
        }else{
            alert(data.result)
        }
    }

    const handleUpdateProduct = async () =>{
        // console.log(name,age,email)
        let data = await fetch(`http://localhost:3000/api/products/${pid}`,
            {
                method:"Put",
                body:JSON.stringify({name,price,company,color,category})
            }
        )
        data = await data.json();
        if(data.success){
            alert(data.msg)
            router.push('/productslist')
        }else{
            alert(data.result)
        }
        // console.log(data)
    }
// required attribute will not work if form tag not given
  return (
    <div className='container post-form'>
        <h1>UpdateProduct with POST API</h1>
        <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type='number' placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} required/>
        <input type='text' placeholder='Enter Company' value={company} onChange={(e) => setCompany(e.target.value)} required/>
        <input type='text' placeholder='Enter color' value={color} onChange={(e) => setColor(e.target.value)} required/>
        <input type='text' placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)} required/>

        <button className='btn btn-primary' onClick={handleUpdateProduct}>Update Product</button>
        <Link href={'/'} >Go Home</Link>
    </div>
  )
}

export default UpdateProduct