/*MENU*/

function openNav() {
  document.getElementById("openNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("openNav").style.width = "0%";
}

/*PROJETO*/

const initSlider = () => {
  const cardList = document.querySelector(".slider .slides");
  const slideButtons = document.querySelectorAll(".slider .slider-buttons");
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev" ? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", initSlider);

/*COPYRTING*/

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

/*SCROLL*/

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));
