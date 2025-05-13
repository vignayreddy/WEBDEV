import {useState} from "react";
export default function Comments(){

    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating:0,
    });

    let handleInputChange = (event)=>
    {

        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value};
        })
        event.preventDefault();
       
    }


let handleSubmit = (event)=>{
    console.log(formData);
    event.preventDefault();
    setFormData({
        username:"",
        remarks:"",
        rating:0,
    });
}
    return(
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name="username"  id = "username" onChange= {handleInputChange}placeholder="username" type="text"  value={formData.username}/>
           <br></br>
           <br></br>
           <label htmlFor="remark">Remarks</label>
           <textarea  name="remarks"id="remark" onChange= {handleInputChange}  placeholder="remarks" value={formData.remarks}></textarea>
           <br></br>
           <label htmlFor="rating">Rating</label>
                <input  name="rating"id ="rating"onChange= {handleInputChange} value={formData.rating} placeholder="rating" type="number" min={1} max={10}/>
                <br></br>
                <br></br>
                <button  >Add Comment</button>
            </form>
        </div>
    )
}