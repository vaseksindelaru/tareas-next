"use client"
import { useEffect, useState } from 'react';
import React from 'react'


function index() {
    
     
const [message,setMessage] = useState ("Loading")

    useEffect(() => {
fetch("http://127.0.0.1:8080/postgres.py")
.then((response)=>response.json()
.then((data)=>{
    console.log(data)
    setMessage(data.random_number)
}))
    },[])

const handleRefresh = () => {
        window.location.reload()}
  return (
    <div class="text-center py-28 ">
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRefresh}>Refrescar página</button> 
      <div>el numero es </div>
      <div class="text-xl font-semibold">{message}</div>
    </div>
  )
}

export default index


