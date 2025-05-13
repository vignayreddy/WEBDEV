import { useState } from "react"

export default function Form()
{

    let [formData,setFormData] = useState({fullName:"",userName:""});

    // let [fullName,setFullName] = useState("");
    // let [userName,setusername] = useState("");

// let handleNameChange = (event) =>{
//     console.log(event.target.value);
//     setFullName(event.target.value);
// }
// let  handleUsername = (event)=>
//     {
//         setusername(event.target.value);

//     }

let handleInputChange = (event) => {
    let fieldName = event.target.name;
    console.log(fieldName);

}

    return(
        <form>
            <label htmlFor="fullName">  Full Name</label>
            <input id = "fullName" onChange={handleInputChange} placeholder="Enter full name" type="text" value={formData.fullName} name ="fullName"></input>
           <br></br>
            <label htmlFor="username">User Name</label>
            <input id = "username" onChange={handleInputChange} placeholder="Enter full name" type="text" value={formData.userName} name = "userName"></input>
         
        </form>
    )

}