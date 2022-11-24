let burger = document.querySelector('.menuBurger');
if(burger) {
    let menu = document.querySelector('.headerMenu');
    let background = document.querySelector('.headerBackground');
    burger.addEventListener('click', function(e) {
        menu.classList.toggle('active');
        background.classList.toggle('active');
    })
}