const menu = document.querySelector('.toggle__menu');
const nav = document.querySelector('.header__nav');

menu.addEventListener('click',() => {
    menu.classList.toggle('open');
    nav.classList.toggle('active');
    nav.classList.toggle('open');
});


// const chev =document.querySelector('.header__nav ul li i');
// const content = document.querySelector('.inner__content');

// chev.addEventListener('click',()=>{
//     chev.classList.toggle('open');
//     content.classList.toggle('open');

// })

const dropp = document.querySelectorAll(".header__nav ul li");

dropp.forEach((dropps) => {
    dropps.addEventListener("click", () => {
        dropps.nextElementSibling.classList.toggle("open");
        dropps.querySelector("i").classList.toggle("open");
    });
});