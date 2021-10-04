// RED WINE

const modalRedWine = document.querySelector('.modal-red-wine');
const btnRedWine = document.querySelector('.red-wine-txt');
const spanRedWine = document.getElementsByClassName('close-red-wine')[0];

btnRedWine.addEventListener('click', () => {
    modalRedWine.style.display = "block";
})

spanRedWine.addEventListener('click', () => {
    modalRedWine.style.display = "none";
})

window.addEventListener('click', (event) => {
    if(event.target == modalRedWine) {
        modalRedWine.style.display = "none";
    }
})

// ROSE

const modalRose = document.querySelector('.modal-rose');
const btnRose = document.querySelector('.rose-txt');
const spanRose = document.getElementsByClassName('close-rose')[0];

btnRose.addEventListener('click', () => {
    modalRose.style.display = "block";
})

spanRose.addEventListener('click', () => {
    modalRose.style.display = "none";
})

window.addEventListener('click', (event) => {
    if(event.target == modalRose) {
        modalRose.style.display = "none";
    }
})

// WHITE WINE

const modalWhiteWine = document.querySelector('.modal-white-wine');
const btnWhiteWine = document.querySelector('.white-wine-txt');
const spanWhiteWine = document.getElementsByClassName('close-white-wine')[0];

btnWhiteWine.addEventListener('click', () => {
    modalWhiteWine.style.display = "block";
})

spanWhiteWine.addEventListener('click', () => {
    modalWhiteWine.style.display = "none";
})

window.addEventListener('click', (event) => {
    if(event.target == modalWhiteWine) {
        modalWhiteWine.style.display = "none";
    }
})

// CHAMPAGNE

const modalChampagne = document.querySelector('.modal-champagne');
const btnChampagne = document.querySelector('.champagne-txt');
const spanChampagne = document.getElementsByClassName('close-champagne')[0];

btnChampagne.addEventListener('click', () => {
    modalChampagne.style.display = "block";
})

spanChampagne.addEventListener('click', () => {
    modalChampagne.style.display = "none";
})

window.addEventListener('click', (event) => {
    if(event.target == modalChampagne) {
        modalChampagne.style.display = "none";
    }
})

// REVEAL WINE SECTION

const ratio = 0.4;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r);
})