const mongoose = require("mongoose");
const {Schema} = mongoose;


main()
.then(()=>console.log("Connection Successfull"))
.catch((err)=>console.log(err))

async function main() {
await mongoose.connect("mongodb://Vignayreddy:pssword@127.0.0.1:27017/relationDemo?authSource=admin")

}

const orderSchema = new Schema({
   
    item: String,
    price:Number,
 
})

const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'order',
    }]
});

customerSchema.pre("findOneAndDelete",async ()=>
{
    console.log("PRE MIDDLEWARE")
})

customerSchema.post("findOneAndDelete",async ()=>
{
    console.log("POST MIDDLEWARE")
})


const order = mongoose.model("order",orderSchema);
const   Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async()=>
{
    let cust1 = new Customer({
        name: "Vignayreddy",
    })

    let order1 = await order.findOne({item:"Apple"});
    let order2 = await order.findOne({item:"Grapes"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await  cust1.save();
    console.log(result);

}
// addCustomer();

// async function abc() {

//     let result =await   Customer.find({});
//  console.log(result);

// }
// abc();

async function abcd() {

    let result =await   Customer.find({}).populate("orders");
 console.log(result[0]);

}
abcd();

// const addOrders = async()=>
// {
//   let result =   await order.insertMany([{
//         item:"Apple",
//         price:100
//     },{
//         item:"Orange",
//         price:200
//     },{
//         item:"Grapes",
//         price:300
//     }])

//     console.log(result);

// }

// addOrders();


// addData();




const delCust = async()=>
{
    let customer = await Customer.findByIdAndDelete('68235a0c0277234ab2718fb2');
    console.log(customer);
}
delCust();
