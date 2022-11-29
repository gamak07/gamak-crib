var images = ['slideshow-1.jpg', 'slideshow-2.jpg', 'slideshow-3.jpg', 'slideshow-4.jpg', 'slideshow-5.jpg' ]

var i = 0;

console.log(images, i);
function slideshow() {
    document.getElementById('image').src = images[i];

    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout('slideshow()' , 2000)
}
window.onload = slideshow


let slides = document.querySelector('.main-ctn').children
let prev = document.querySelector('.btn')
let next = document.querySelector('.btn-1')

console.log(slides, prev, next);