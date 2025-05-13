const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");

main().then(()=>
{
    console.log("Connection Successfull");
})
.catch((err)=>console.log("error"));


async function main()
{
    await mongoose.connect("mongodb://Vignayreddy:Vinnu2006@127.0.0.1:27017/amazon?authSource=admin");
}


//we can represent in any way 

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, //Like not null it was required compulsory
        maxlength :50, // Gives error if it exceeds length 50
    },
    author: 
    {
        type: String
    },
    price:
    {
        type: Number,
        min:1 //Minimum Value
    },
    discount:{
        type:Number,
        default:0  // Like Constrains
    },
    category:
    {
        type:String,
        enum:["Fiction","Non Fiction","Thriller"] // Like Constrains

    }
});


const Book = mongoose.model("book",bookSchema);

let book1 = new Book(
    {
        title: "Rahul",
        author: "Vignayreddy",
        price: 10,
        category:"Fiction"
    }
);

book1.save();

Book.insertMany(
    {
        title: "Python1",
        author: "Vignayreddy1",
        price: 10000

    },
    {
        title: "Python2",
        author: "Vignayreddy2",
        price: 100000

    },
   
)


// Book.deleteMany({}).then((res)=>
// {
//     console.log(res);
// });




//while updating if we ignore any constrains it will work fine without an error
//We can also change this by setting to true


//in the update  function itself do {runValidators:true};
