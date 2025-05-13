const express = require("express");
const app = express();
const port = 8080;
const {v4  : uuidv4} =require("uuid");

const path = require("path");

app.use(express.urlencoded({extended:true}));




app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));



let posts = [
    {
        id : uuidv4(),
        username : "apnacollege",
        content : "I love coding"
    },
    {
        id  : uuidv4(),
        username : "Vignay Reddy",
        content : "Work hard"
    },
    {
        id:uuidv4(),
        username : "Bhanu ",
        content : "I got internship..!"
    },
]




app.get("/posts",(req,res)=>
{

   res.render("index.ejs",{posts});

});

app.get("/posts/new",(req,res)=>
{
    res.render("new.ejs");
    //res.redirect([status],path)
});

app.post("/posts",(req,res)=>
{

    // console.log(req.body);
    let {username,content}=req.body;
    let id = uuidv4();
    posts.push({id,username,content});

    // res.send("post request working");
    res.redirect("/posts");

});


app.listen(port,()=>
{
    console.log(`Listening to port ${port}`);
});


app.get("/posts/:id",(req,res)=>
{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id);
    // console.log(id);
    console.log(post);
    // res.send("Request Working");
    res.render("show.ejs",{post});


});



app.patch("/posts/:id",(req,res)=>
{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id);
    let newContent = req.body.content;
    post.content=newContent;
    res.send("Patch Request Working");


});



app.get("/posts/:id/edit",(req,res)=>
{


    let {id} = req.params;
    let post = posts.find((p) => id===p.id);
    res.render("edit.ejs",{post});

});


   