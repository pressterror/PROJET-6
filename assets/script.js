/********** déclaration ********/
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

/******** test arrow  ********/
arrow.forEach((arrowElement) => {
  arrowElement.addEventListener("click", () => {
    testarrow(arrowElement);
  });
});

function testarrow(arrowElement) {
  if (flecheGauche === arrowElement) {
    console.log("test gauche");
  } else if (flecheDroite === arrowElement) {
    console.log("test droite");
  }
}
/********* création bullet ********/
slides.forEach((slidesElement, index) => {
  let dot = document.createElement("li");
  dot.classList.add("dot");
  dots.appendChild(dot);
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
});

/******* zonetest ******/
let currentIndex = 0;
let ancienIndex = currentIndex;
const img = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner p");

arrow.forEach((arrowElement) => {
  arrowElement.addEventListener("click", () => {
    testarrow(arrowElement);
    bannerActive(arrowElement);
  });
});

function bannerActive(arrowElement) {
  if (flecheGauche === arrowElement) {
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
}

/********** test bullet actuelle  *********/
let bulletActive = document.querySelectorAll(".dots li");
bulletActive.forEach((bullet) => {
  console.log(bullet);
});
