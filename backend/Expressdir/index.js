

const express = require("express");
const app = express();
// console.dir(app);

let port = 8081; //8080
app.listen(port,() => 
{
    console.log(`App is listening on port ${port}`);
} );



// app.use((req,res) => {
//     // console.log(req);
//     // console.log(res);
//     console.log("Request Recieved");
//     res.send(
//        "<h1>Fruits</h1><ul><li>Mango</li></ul>"
//     );
// });



// Sending a Response -- req,res


// app.get("/fruits",(req,res)=>
// {
//     res.send(
//         "<h1>Fruit</h1><ul><li>Mango</li></ul>"
//      );
// });


// * for all paths 



// app.post("/",(req,res)=>
//     {
//         res.send(
//             "sending post request"
//          );
//     });
    




app.get("/",(req,res)=>
    {
        res.send(
            "I'm from root"
         );
    });

app.get("/:username/:id",(req,res)=>
{
    let {username,id} = req.params;
    res.send(
        `I'm from username ${username}`
     );
});






app.get("/search",(req,res)=>
{
   let a = req.query.q;
    res.send(`These are search results for query ${a}`);
});
