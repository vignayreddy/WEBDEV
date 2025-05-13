import { useState,useEffect } from "react";
export default function Counter1()
{
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);
    
    
    let incCountx = () =>{
            setCountx((currCountx) => currCountx+1);
    }
    let incCounty = () =>{
        setCounty((currCounty) => currCounty+1);
}

 useEffect(function printSomething(){
        console.log("This is a side-effect");
    },[countx])
    return(
<div>
    <h3>Countx={countx}</h3>
    <button onClick={incCountx}>+1</button>
    <h3>County={county}</h3>
    <button onClick={incCounty}>+1</button>

</div>
    );
}