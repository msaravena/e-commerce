const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const nav = document.querySelector('.navbar');

bar.addEventListener('click', function() {
    nav.classList.toggle('show_nav');
})


