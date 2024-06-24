const navdialog = document.getElementById('navdialog');

function handlemenu() {
    navdialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = -36 * 4;

function setupIntersection(element, isLTR, speed) {
    const intersection = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }

    const intersectionObserver = new IntersectionObserver(intersection);
    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersection(line1, true, 0.15);
setupIntersection(line2, false, 0.15);
setupIntersection(line3, true, 0.15);


const dtelemnts = document.querySelectorAll('dt');
dtelemnts.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelector('i');

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    });
});

