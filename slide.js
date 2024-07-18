let imagevar = document.getElementById('image');
let imageArray = ['image/Slider1.jpg','image/Slider2.jpg', 'image/Slider3.jpg', 'image/Slider4.jpg','image/Slider5.jpg','image/Slider6.jpg','image/Slider7.jpg','image/Slider8.jpg','image/Slider9.jpg','image/Slider10.jpg'];
let imageIndex = 0;

function slideshow() {
    imagevar.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex >=imageArray.length){
        imageIndex = 0
    }
    
}

 setInterval(slideshow, 3000);

 alert('This App is developed By Abraham Adeniji') /*my addition*/
