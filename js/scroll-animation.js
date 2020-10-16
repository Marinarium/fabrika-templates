const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight; //Высота объекта
            const animItemOffset = offset(animItem).top; //Позиция объекта относительно вьюпорта
            const animStart = 10; //Коэффициент момента старта анимации

            //Высчитываем момент начала анимации
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            //Если анимированный элемент выше нижней границы окна момент анимации высчитываем иначе
            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            //Добавляем класс при условиях если проскроллили до необходимой позиции
            if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active-animation');
            } else {
                if(!animItem.classList.contains('anim-once')) {
                    animItem.classList.remove('active-animation');
                }
            }
            
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}