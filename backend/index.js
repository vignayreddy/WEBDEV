const express = require("express");
const app = express();
const port =8080;


app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/register",(req,res)=>
    {
        res.send("Standard GET Response");
    });
    
    
    
    app.post("/register",(req,res)=>
        {
            console.log(req.body);
            res.send("Standard POST Response");
        });
app.listen(port ,()=>
{
    console.log(`Listening to port ${port}`);
});

