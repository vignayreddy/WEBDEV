const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main().then(()=>
{
    console.log("Connection Successfull");
})
.catch((err)=>console.log("error"));


async function main()
{
    await mongoose.connect("mongodb://Vignayreddy:password@127.0.0.1:27017/fakewhatsapp?authSource=admin");
}
let chats = [
  
    {
        from: "Rahul",
        to: "Vignay",
        msg: "Hey Vignay! I'm good, how about you?",
        created_at: new Date(),
    },
    {
        from: "Ananya",
        to: "Vignay",
        msg: "Can you send me the assignment?",
        created_at: new Date(),
    },
    {
        from: "Vignay",
        to: "Ananya",
        msg: "Sure, I’ll send it in 5 mins.",
        created_at: new Date(),
    },
    {
        from: "Sneha",
        to: "Rahul",
        msg: "Don’t forget about our meeting tomorrow.",
        created_at: new Date(),
    }
];



 Chat.insertMany(chats);
