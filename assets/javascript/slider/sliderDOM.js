import Slider from './slider';
import elements from './elements';

let slidertext = document.querySelector('#slider-text');
let sliderTitle = document.querySelector('#slider-titulo');
let sliderSubtitle = document.querySelector('#slider-subtitulo');
let sliderImage = document.querySelector('#slider-img');
let textContnet = document.querySelector('#slider-text-contnet');

console.log(sliderImage);

let slider = new Slider({
    elements,
    animationFunc: function(element) {

        textContnet.classList.add("hide");
        sliderImage.classList.add("hide");

        setTimeout(function() {

            sliderTitle.innerHTML = element.titulo;
            sliderSubtitle.innerHTML = element.subtitle;
            sliderImage.innerHTML = element.image;
            slidertext.innerHTML = element.text;

            textContnet.classList.remove("hide");
            sliderImage.classList.remove("hide");

        }, 600);


    },
    speed: 2000
});

console.log(sliderImage);

slider.play();