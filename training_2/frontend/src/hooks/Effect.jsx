import React, { useState } from 'react'
import { useEffect } from 'react'


const Effect = () => {
    const [count,setCount]=useState(0);
    const [user,setUser]=useState([]);
//    useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => {
//           setUser(data);
//           console.log(data);
//       });
// }, []); // runs only once

   useEffect(()=>
   {
       console.log("From use effect component mount");
       return()=>{
            console.log("component unmount");
       }
    },[count])
    
  return (
    
    <div>
      <h1>Effect</h1>
      <h3>Count:{count}</h3>
      <button onClick={()=>setCount(count+1)}>Inc</button>
       <button onClick={()=>setCount(count-1)}>Dec</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <h1>User</h1>
        <ul>
            {user.map((use)=>
            (
                <li> id:{use.id} Name:{use.name}  </li>
            ))}
        </ul>


    </div>
  )
}

export default Effect;
