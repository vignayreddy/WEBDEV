import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox()
{

    
let [city,setCity]= useState("");


    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "07ac91689adf77a3f04bf89913d4129f";


    let getWeatherInfo = async ()=>{
      let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
      let jsonResponse = await response.json();
   
      let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_Like: jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,
      }
      console.log(result);
    }

let handleSubmit = (event) =>
{
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
}



let handleChange = (event) =>
{
    setCity(event.target.value);
}


    return(
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit = {handleSubmit}>
            <TextField  onChange={handleChange}id="outlined-basic" label="City Name" variant="outlined"  value={city}required/>
           <br></br>
           <br></br>
            <Button variant="contained" type="submit">Search</Button>
      

       </form>
        </div>
    );

}