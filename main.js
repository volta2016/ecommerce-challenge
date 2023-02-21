function caller() {
  alert(
    "This project was created for practicing my skills like a front-end developer"
  );
}

window.addEventListener("load", caller());

window.addEventListener("click", (e) => {
  let longitud_item2 = null;
  // CONTROL DE TODOS LOS SLIDERS - INICIO
  if (e.target.classList.contains("next-slide")) {
    const contenedorSlider = e.target.parentNode.nextElementSibling;
    contenedorSlider.style.scrollBehavior = "smooth";

    if (!contenedorSlider.hasAttribute("tite")) {
      contenedorSlider.setAttribute("title", 0);
    }

    longitud_item2 = +contenedorSlider.getAttribute("title");

    const top_container = contenedorSlider.scrollWidth / 2;

    longitud_item2 += 240;
    if (longitud_item2 > top_container) longitud_item2 = 0;

    contenedorSlider.setAttribute("title", longitud_item2);
    contenedorSlider.scroll(longitud_item2, 0);
  }

  if (e.target.classList.contains("back-slide")) {
    const contenedorSlider2 = e.target.parentNode.nextElementSibling;
    contenedorSlider2.style.scrollBehavior = "smooth";

    if (!contenedorSlider2.hasAttribute("title"))
      contenedorSlider2.setAttribute("title", 0);

    longitud_item2 = +contenedorSlider2.getAttribute("title");

    const top_container2 = contenedorSlider2.scrollWidth / 2;

    longitud_item2 -= 240;
    if (longitud_item2 < 0) longitud_item2 = top_container2;

    contenedorSlider2.setAttribute("title", longitud_item2);
    contenedorSlider2.scroll(longitud_item2, 0);
  }
  // CONTROL DE TODOS LOS SLIDERS - FIN

  if (e.target.classList.contains("delete")) {
    e.target.parentNode.parentNode.classList.add("dissapear");
  }
});

// slides DOM
const slides = document.querySelectorAll(".item-slide");
const points = document.querySelectorAll(".point");

// logic slide
let index = 1; //first image
showSlide(index);

function nextSlide(n) {
  showSlide((index += n));
}

function positionSlide(n) {
  showSlide((index = n)); //go to position slide through of point
}

setInterval(() => {
  showSlide((index += 1));
}, 6000);

function showSlide(n) {
  let i;
  //lenght = 4 - si > al lenght regresa a inicio
  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < points.length; i++) {
    points[i].className = points[i].className.replace(" active", "");
  }

  slides[index - 1].style.display = "block";
  points[index - 1].className += " active";
}

// logica footer

const moreInfoSwitch = document.querySelector(".more-info");
const infoItemsSwitch = document.querySelector(".items-info");
const arrowDown = document.querySelector(".arrow");
moreInfoSwitch.addEventListener("click", (e) => {
  infoItemsSwitch.classList.toggle("items-info-switch");
  moreInfoSwitch.classList.toggle("more-info-switch");
  arrowDown.classList.toggle("switch");
});

// logica menu
const burguer = document.getElementById("toggle-burguer");
const menu = document.getElementById("main-nav");

burguer.addEventListener("click", () => {
  burguer.classList.toggle("activetwo");
  menu.classList.toggle("show");
});

// logic modal
const modal = document.querySelector(".modalhome");
const located = document.querySelector(".location");
const closeModal = document.getElementById("close");

const handleEventModal = () => modal.classList.toggle("showm");
located.addEventListener("click", handleEventModal);
closeModal.addEventListener("click", handleEventModal);
