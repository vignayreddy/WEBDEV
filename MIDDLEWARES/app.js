const express  = require("express");
const app = express();
const ExpressError = require("./ExpressError");
//Middlewares -> response send

// app.use((req,res,next)=>
// {
//     let {query}= req.query;
//     console.log(query);
//     console.log("Hi 1st ");
//     // res.send("Middleware finished");
//     next();//next response is executed 
  
// })
// app.use((req,res,next)=>
// {
//     let {query}= req.query;
//     console.log(query);
//     console.log("Hi 2st ");
//     // res.send("Middleware finished");
//     next();//next response is executed 
  
// })

// app.use((req,res,next)=>
// {
//     req.time = new Date( Date.now()).toString().split(" ").slice(0,4).join().replace(",","");
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })
const checkToken = (req,res,next)=>
{
   let {query}= req.query;
   if(query==="giveaccess")
   {
    return next();
   }
//    res.send("ACCESS DENIED");
throw new ExpressError(401,"ACCESS DENIED");
}


// app.get("/wrong",(req,res)=>
// {
//     abcd = abcd;
// })

app.get("/admin",(req,res)=>
{
   throw new ExpressError(401,"ACCESS DENIED");
})




app.use((err,req,res,next)=>
{
    console.log("------ERROR---------");
    let {status=404,message="helo"} = err;
    res.status(status).send(message);
})


app.use("/",(req,res,next)=>
{
    console.log("Only for random");

    next();

})

app.get("/api",checkToken,(req,res)=>
{
    res.send("Hello from api");
})



//404 for eror handling
// app.use("/",(req,res,next)=>
// {
//   res.status(400).send("Page not found");
//     next();

// })
app.get("/",(req,res)=>
{
    res.send("Hello World");
})



app.get("/random",(req,res)=>
{
    res.send("Random");
})


//logger
// app.use((req,res,next)=>
// {
//     req.time = new Date( Date.now()).toString().split(" ").slice(0,4).join().replace(",","");
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

app.listen(8900,()=>
{
    console.log("Server is running on port 8900");
})




