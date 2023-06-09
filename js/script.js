const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function(){
    const results = await fetch("https://picsum.photos/v2/list?limit=100");
    // console.log(results);
    const images = await results.json();
    console.log(images);
};
getImage();