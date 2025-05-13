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
    email:String,
})

const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
})

const User= mongoose.model("User",userSchema);
const Post = mongoose.model("Post", postSchema);



const addData = async () =>
{
    let user1 = await User.find({username:"Vignayreddy"})
    let post2 = new Post({
        content:"Bye",
        likes:7,
        user:user1._id,
    });
   

   
   await post2.save();
}

