const mongoose = require("mongoose");
const {Schema} = mongoose;


main()
.then(()=>console.log("Connection Successfull"))
.catch((err)=>console.log(err))

async function main() {
await mongoose.connect("mongodb://Vignayreddy:Vinnu2006@127.0.0.1:27017/relationDemo?authSource=admin")

}


const userSchema = new Schema({
    username:String,
    address:[{
        _id:false,
        location:String,
        city:String,
    }],
})



const User = mongoose.model("User",userSchema);
const addUsers =  async()=>
{

       let user1 = new User({
        username:"Sherlock",
        address:[{
            location:"location1",
            city:"city1",
        }]
       }) ;

       user1.address.push({ location:"location2",
            city:"city2",})

     let result =   await user1.save();
       console.log(result);
}

addUsers();