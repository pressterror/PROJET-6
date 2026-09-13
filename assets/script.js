/********** déclaration const ********/
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
/************* éléments DOM ************/
const arrow = document.querySelectorAll(".arrow");
const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner p");
/************ declaration let ************/
let currentIndex = 0;
let ancienIndex = currentIndex;

/********* création bullet ********/
slides.forEach((slidesElement, index) => {
  let dot = document.createElement("li");
  dot.classList.add("dot");
  dots.appendChild(dot);
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
});
let bulletActive = document.querySelectorAll(".dots li");

/**************** lanceur carrousel ****************/
arrow.forEach((arrowElement) => {
  arrowElement.addEventListener("click", () => {
    bannerActive(arrowElement);
  });
});
/********************  fonction carrousel  *******************/
function bannerActive(arrowElement) {
  /*****effet transition debut ****/
  img.style.opacity = "0";
  setTimeout(() => {
    /********************************/
    if (flecheGauche === arrowElement) {
      /*si click a gauche sur slide1 affiche slide4*/
      if (currentIndex === 0) {
        ancienIndex = currentIndex;
        bulletActive[ancienIndex].classList.toggle("dot_selected");
        currentIndex = 3;
        bulletActive[currentIndex].classList.toggle("dot_selected");
        let src = `./assets/images/slideshow/${slides[currentIndex].image}`;
        img.setAttribute("src", src);
        console.log(src);
        bannerTxt.innerHTML = slides[currentIndex].tagLine;
      } else {
        ancienIndex = currentIndex;
        bulletActive[ancienIndex].classList.toggle("dot_selected");
        currentIndex--;
        bulletActive[currentIndex].classList.toggle("dot_selected");
        let src = `./assets/images/slideshow/${slides[currentIndex].image}`;
        img.setAttribute("src", src);
        console.log(src);
        bannerTxt.innerHTML = slides[currentIndex].tagLine;
      }
    } else if (flecheDroite === arrowElement) {
      if (currentIndex < 3) {
        ancienIndex = currentIndex;
        bulletActive[ancienIndex].classList.toggle("dot_selected");
        currentIndex++;
        bulletActive[currentIndex].classList.toggle("dot_selected");
        let src = `./assets/images/slideshow/${slides[currentIndex].image}`;
        img.setAttribute("src", src);
        console.log(src);
        bannerTxt.innerHTML = slides[currentIndex].tagLine;
      } else {
        /** si click a droite sur slides 4 retour au slide 1 **/
        ancienIndex = currentIndex;
        bulletActive[ancienIndex].classList.toggle("dot_selected");
        currentIndex = 0;
        bulletActive[currentIndex].classList.toggle("dot_selected");
        let src = `./assets/images/slideshow/${slides[currentIndex].image}`;
        img.setAttribute("src", src);
        console.log(src);
        bannerTxt.innerHTML = slides[currentIndex].tagLine;
      }
    }
    /*****effet transition fin ****/
    img.style.opacity = "1";
  }, 400);
  /********************************/
}
