let slidePosition=0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides= slides.length;

document.getElementById('carousel-prev').addEventListener("click", function(){
  updateSlidePositionPrev();
});

document.getElementById('carousel-next').addEventListener("click", function(){
    updateSlidePositionNext();
  });

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel_active');
        slide.classList.add('carousel_hidden');
    }

    slides[slidePosition].classList.add('carousel_active');
}


  function updateSlidePositionPrev(){
console.log("hello prev");

if(slidePosition===totalSlides-1){
    slidePosition = 0;
}
else{
    slidePosition++;
}
updateSlidePosition();
  }

  function updateSlidePositionNext(){
console.log("hello next");

if(slidePosition===0){
    slidePosition = totalSlides-1;
}
else{
    slidePosition--;
}
updateSlidePosition();
  }