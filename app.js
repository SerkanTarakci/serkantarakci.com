var pics = [
    "imgs/rachelball.jpg",
    "imgs/rachelcolor.jpg",
    "imgs/rachelcute.jpg",
    "imgs/rachelwithbaby.jpg",
    "imgs/rachelmordogan.jpg",
    "imgs/rachelnike.jpg",
    "imgs/rachelpark.jpg",
    "imgs/rachelsea.jpg",
    "imgs/rachelseaside.jpg",
    "imgs/rachelsleeping.jpg"
];

let btn = document.querySelector("button");
let img = document.querySelector("img");
let counter = 1;

btn.addEventListener("click", function(){
    img.src = pics[counter];
    counter++;
    console.log("Counter: "+counter);
    if(counter==pics.length){
        counter=0;
    }
});