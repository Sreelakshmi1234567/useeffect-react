import React, {useState,useEffect } from 'react'

function Useeffect() {
    const [count,setcount] = useState(0)
    useEffect(()=>{
        alert("component has been updated")
    },[count]);
  return (
    <>
    <div>
        <p>count:{count}</p>
        <button onClick={()=>setcount(count+1)}>
            Increment count
        </button>
    </div>
    </>
  )
}

export default Useeffect