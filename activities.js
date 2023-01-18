const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById ("total-counter")
const remainingCounterEl = document.getElementById ("remaining-counter");


textareaEl.addEventListener ("keyup" , () =>{
updateCounter();
});

updateCounter()

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = 
    textareaEl.getAttribute("maxlength")-textareaEl.value.length;

}

const navbarEl = document.querySelector(".navbar");

window.addEventListener ("scroll" , () => {
      console.log(window.scrollY);

});

const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll" , () => {
    updateImage();
});

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset / 800;
   
    console.log(window.pageYOffset , 1 - window.pageYOffset / 800);
    
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}


let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let close= document.querySelector('.close');
let video= document.querySelector('video');
btn.onclick = function(){
    btn.classList.add('active')
    clip.classList.add('active')
    video.play();
}
close.onclick = function(){
    btn.classList.remove('active')
    clip.classList.remove('active')

}
