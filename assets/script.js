const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlide = 0;

const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


function updateSlide() {
    bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerImage.alt = `Slide ${currentSlide + 1}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;

    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll(".dots .dot");
    dots.forEach((dot, index) => { 
        console.dir(dot)
        if (index === currentSlide) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

function createDots() {
    slides.forEach((_slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlide();
        });

        dotsContainer.appendChild(dot);
    });
}

function nextSlide() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlide();
}

function previousSlide() {
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    updateSlide();
}

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

createDots();
updateSlide();