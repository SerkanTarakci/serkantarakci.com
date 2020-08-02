var pics = [
    "assets/img/gallery/rachel/rachelball.jpg",
    "assets/img/gallery/rachel/rachelcolor.jpg",
    "assets/img/gallery/rachel/rachelcute.jpg",
    "assets/img/gallery/rachel/rachelwithbaby.jpg",
    "assets/img/gallery/rachel/rachelmordogan.jpg",
    "assets/img/gallery/rachel/rachelnike.jpg",
    "assets/img/gallery/rachel/rachelpark.jpg",
    "assets/img/gallery/rachel/rachelsea.jpg",
    "assets/img/gallery/rachel/rachelseaside.jpg",
    "assets/img/gallery/rachel/rachelsleeping.jpg"
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