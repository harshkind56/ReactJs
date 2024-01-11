import { useEffect, useState } from "react";
const User = () =>{
   const[count , setCount] = useState(0);
   useEffect(() => {
//API CALLS.
   },[]);
   
    return (
        <div className="user">
            <h1>Count = {count}</h1>
            <h2> Name: harsh</h2>
            <h2>Location:HYD</h2>
            
        </div>
    )
}
export default User;