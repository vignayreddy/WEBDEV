const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then(()=>
{
    console.log("Connection Successfull");
})
.catch((err)=>console.log("error"));


async function main()
{
    await mongoose.connect("mongodb://Vignayreddy:Vinnu2006@127.0.0.1:27017/fakewhatsapp?authSource=admin");
}


app.listen(8083,()=>
{
    console.log("Server is listening on port 8083");
})

app.get("/",(req,res)=>
{
   res.send("Server is listening") 
})


//Error Handling MiddleWare
app.use((err,req,res,next)=>
{

    let {status=500 , message="Some error occurred"} = err;
    res.status(status).send(message);

})

// let  chat1 = new Chat({
//     from:"Vignay",
//     to:"Rahul",
//     msg:"Hi rahul how are you?",
//     created_at : new Date(),
// });

// chat1.save().then((res)=>
// {
//     console.log(res);

// });

//Index Route
app.get("/chat", async (req,res)=>{

    try{
let chats= await  Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats});
    }
    catch(err)
    {
        next(err);
    }
  

});


//New Route

app.get("/chats/new",(req,res,next)=>{
    // throw new ExpressError(404,"Page not Found");
    res.render("new.ejs");
    // next();

});



//Create Route
app.post("/chats",(req,res)=>
{

    try{
          let {from,to,msg} = req.body;
    let newChat = new Chat(
        {
            from:from,
            to:to,
            msg:msg,
            created_at : new Date(),
        }
    );
    console.log(newChat);
    newChat.save().then((res)=>{console.log("Chat was saved ")}).catch((err)=>{err});
    res.redirect("/chat");
    }  catch(err)
    {
        next(err);
    }
    
});



//Edit route
app.get("/chats/:id/edit", async (req,res)=>{

    let id = req.params.id;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});

});

function asyncWrap(fn)
{
    return function(req,res,next)
    {
        fn(req,res,next).catch((err)=>next(err));
    }
}


//Update Route
app.put("/chats/:id", async (req,res)=>
{
    let {id}= req.params;
    let {msg:newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{new:true,runValidators:true});

    console.log(updatedChat);
    res.redirect("/chat");

});


//Destroy Route
app.delete("/chats/:id",(req,res)=>
{
    let id = req.params.id;
    Chat.findByIdAndDelete(id).then((res)=>{console.log("Deleted Successfull")}).catch((err)=>console.log(err));
    res.redirect("/chat");
})