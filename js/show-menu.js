const burger = document.querySelector('.burger');
const mainMenu = document.querySelector('.burger-wrap');
const body = document.body;

body.addEventListener('click', function (event) {
        if (burger.contains(event.target)) {
            switchMenu();
        } else if (burger.classList.contains('active') && !(mainMenu.contains(event.target))) {
            switchMenu();
        }

        function switchMenu() {
            mainMenu.classList.toggle('visually-hiddens');
            burger.classList.toggle('active');
            body.classList.toggle('overflow-hidden');
        }
});
