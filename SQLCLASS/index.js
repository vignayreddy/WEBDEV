
import mysql2 from "mysql2/promise";
import { faker } from "@faker-js/faker";
import express from "express";
const app= express();


const connection =  await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'Vinnu2006'
  });


//Inserting into Data


//   let q = "insert into user(id,username,email,password) values ?";
//   function getFake()
//   {
//   return [
    
//        faker.string.uuid(),
//        faker.internet.username(),
//        faker.internet.email(),
//        faker.internet.password(),
//   ];
// }
//  let users=[]
//   for(let i=0;i<=100;i++)
//   {
//     users.push(getFake());
//   }

//   try{

//   const [rows] = await connection.query(q,[users]);

//     console.log(rows);

//   }
  
//   catch(err)
//   {
//     console.log(err);
//   }



// let getRandomUser = () => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.username(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//           };
//   }
  
//   console.log(getRandomUser());
  





app.listen(8081,()=>
{
    console.log("app is listening");

});


app.get("/", async (req,res)=>
{

 let q =  "select count(*) from user";
 try
 {
let [rows] = await connection.query(q);


res.send(rows[0]['count(*)']);



 }
 catch(err)
 {
  console.log("Error Occurred");
 }


});

