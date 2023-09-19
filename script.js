const body = document.body;
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const slideContents = document.querySelectorAll(".slider-content");

let activeSlide = 0;

function setBgImg() {
  body.style.backgroundImage = slideContents[activeSlide].style.backgroundImage;
}

setBgImg();

function setActiveSlide() {
  slideContents.forEach((x) => {
    x.classList.remove("active");
  });
  slideContents[activeSlide].classList.add("active");
}

setActiveSlide();

nextBtn.addEventListener("click", () => {
  nextSlide();
  setBgImg();
  setActiveSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  setBgImg();
  setActiveSlide();
});

function nextSlide() {
  activeSlide++;
  if (activeSlide > slideContents.length - 1) {
    activeSlide = 0;
  }
}

function prevSlide() {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slideContents.length - 1;
  }
}

setInterval(() => {
  nextSlide();
  setBgImg();
  setActiveSlide();
}, 10000);
