const express = require("express");
const app= express();

const path = require("path");

const port = 8082;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>
    {
        console.log(`listening to port ${port}`);
    });
    
app.get("/",(req,res)=>
{
    // res.send("this is route path");
    res.render("home.ejs");
    // res.render("home.ejs",{num:numValue});
});

app.get("/hello",(req,res)=>
    {
        // res.send("this is route path");
        res.send("hello");
    });
    

app.get("/ig/:username",(req,res)=>
{

    let {username} = req.params;
    const instaData = require("./data.json");
   const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs");


});



