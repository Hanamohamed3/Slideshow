
var myImages = Array.from(document.querySelectorAll(".itm img"));
var myTexts = Array.from(document.querySelectorAll(".itm .img-caption")); 
var lightBoxContainer= document.querySelector("#lightBoxContainer");
var lightBox= document.querySelector("#lightBox");
var closeBtn=document.querySelector("#closeBtn");
var prevBtn=document.querySelector("#prevBtn");
var nextBtn=document.querySelector("#nextBtn");
var currentIndex=0;


for (var i = 0; i < myImages.length; i++) {
    myImages[i].addEventListener("click", function (eventInfo) {
        var currentImageSrc = eventInfo.target.getAttribute("src");
        currentIndex = myImages.indexOf(eventInfo.target);
        console.log(currentImageSrc);

        lightBoxContainer.classList.replace("d-none", "d-flex");
        lightBox.style.backgroundImage = `url(${currentImageSrc})`;
    }
    );
}

closeBtn.addEventListener("click",closeSlider);
nextBtn.addEventListener("click",nextSlider);
prevBtn.addEventListener("click",prevSlider);

function closeSlider(){
    lightBoxContainer.classList.replace("d-flex","d-none");

}

function nextSlider(){
    currentIndex++;
    if(currentIndex>= myImages.length) currentIndex=0;
    lightBox.style.backgroundImage=`url(${myImages[currentIndex].getAttribute("src")})`;

}


function prevSlider(){
    currentIndex--;
    if(currentIndex<0) currentIndex=myImages.length -1;
    lightBox.style.backgroundImage=`url(${myImages[currentIndex].getAttribute("src")})`;

}

document.addEventListener("keyup",function(eventInfo){
    if(lightBoxContainer.classList.contains("d-flex")){

    
    switch(eventInfo.key){
case "ArrowLeft":
    prevSlider();
    break;
    case "ArrowRight":
    nextSlider();
    break;
    
    case "Escape":
    closeSlider();
    break;
}}
    }

)

lightBoxContainer.addEventListener("click", function (event) {
    if (event.target === lightBoxContainer) {
        closeSlider();
    }
});







