'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const ImageUpload = () => {
    const [file,setFile] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(file)
        const data = new FormData();
        data.set('file',file)
        let result = await fetch('/api/upload',{
            method:"Post",
            body: data,
        })
        result = await result.json();
        if(result.success){
            alert(result.message)
        }else{
            alert(result.message)
        }
        console.log(result)
    }

  return (
    <div>
        <h1>ImageUpload without any libraries</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='file' onChange={(e) => setFile(e.target.files?.[0])}/>
            <button type='submit' className='btn btn-primary'>Upload Image</button>
            <Link href={'/'}>Go home</Link>
        </form>
    </div>
  )
}

export default ImageUpload