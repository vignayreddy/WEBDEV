// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++)
// {
//     console.dir(smallImages[i]);
// }



// // console.dir(document.querySelector("h1"));

// // console.dir(document.querySelector("#description"));
// // console.dir(document.querySelectorAll("div a"));

// let btn = document.querySelector("button");

// let h3 = document.querySelector("h3");




// function getRandomColor()
// {
//     let red= Math.floor(Math.random()*255);
//     let green= Math.floor(Math.random()*255);
//     let blue= Math.floor(Math.random()*255);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
    
// }


// let randomColor = getRandomColor();
// h3.innerText =randomColor;



// btn.addEventListener("click",function()
// {
//    console.log("generate random number");
// });




// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event)
// {
//     console.log(event);
//     console.log("Mouse clicked");
// });


// let btn1 = document.querySelector("button");
// btn1.addEventListener("click",function(event)
// {
//     console.log(event);
//     console.log("Mouse clicked");
// });





let btn = document.querySelector("button");
let ul = document.querySelector(".ul");
let inp = document.querySelector("input");


btn.addEventListener("click",function()
{
    let item =  document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
});