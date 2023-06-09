const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//connect to API
const getImage = async function(){
    const results = await fetch("https://picsum.photos/v2/list?limit=100");
    // console.log(results);
    const images = await results.json(); //images array
    // console.log(images);
    selectRandomImage(images);
};


//computes an index and finds the image at that index number in the array.
const selectRandomImage = function(images){
   const randomIndex = Math.floor(Math.random()* images.length);
    //console.log(randomIndex); 
    const randomImage = images[randomIndex]; //grabs one image from images array
    // console.log(randomImage);

    displayImage(randomImage);
};

//accepts image randomly selected above
const displayImage = function(randomImage){ 
    const author = randomImage.author;//pull author info
   //add author to page
    authorSpan.innerText = `${author}`;

    const imageAddress = randomImage.download_url; //pull url info
    img.src = imageAddress;
    
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function(){
    getImage();
});
