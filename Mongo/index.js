const mongoose = require("mongoose");



main().then((res)=>
{
console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://Vignayreddy:Vinnu2006@127.0.0.1:27017/test?authSource=admin');
}


 
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        age:Number,
    }
);

const User =  mongoose.model("User",userSchema);
const Employee =  mongoose.model("Employee",userSchema);


//Creating

// const user1 = new User({name:"Adam",email:"adam@gmail.com",age:48});
// const user2 = new User({name:"Eve",email:"eve@gmail.com",age:48});

// user1.save();
// user2.save();



// User.insertMany([
//     {name:"John",email:"john@gmail.com",age:48},
//     {name:"Doe",email:"doe@gmail.com",age:48},
//     {name:"Rahul",email:"rahul@gmail.com",age:48},
//     {name:"vignay",email:"Vignay@gmail.com",age:54}
// ]);


//Finding/Reading

// User.find({age:{$gt:48}}).then((res) => {
//     console.log(res[0]);
// }).catch((err)=>
// {
//     console.log(err);
// })

//Most used one 

// User.findById("681a0a94eb123439e3fb811e").then((res) =>
// {
//     console.log(res)
// });


//Updating

// User.updateOne({name:"vignay"},{name:"68"}).then((res)=>
// {
//     console.log(res);
// });

// User.find().then((res)=>
// {
//     console.log(res);
// })


// User.findOneAndUpdate({name:"68"},{age:68},{new:true}).then((res)=>
// {
//     console.log(res);
// });


//Deleting

// User.deleteMany({name:"Eve"});
// User.deleteMany({}).then(res => console.log(res))
