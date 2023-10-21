/*
"use strict"

let btn = document.querySelector(".accordion__btn1")
let body = document.querySelector('.accordion__body')
let active = document.querySelector('.active')

let id = document.getElementsByTagName('id')

btn.onclick = () => {
    Slider()
    console.log('open')
}
function Slider() {
    //body.style.display = 'block'
    if (body.classList.contains('active')) {
        body.classList.remove('active')
    } else {
        body.classList.add('active')
    }
}*/

let btn = document.getElementsByClassName("accordion__header");
let i;
let icon = document.querySelector(".accordion__btn1")

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        // btn.lastChild``

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}