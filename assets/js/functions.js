//------------------ mobile menu --------------------//

$(document).ready(function () {
  $(document).on("click", ".sub-btn", function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });
});

//---------------- loading screen ------------------//

// Wait for the page to fully load
window.addEventListener("load", () => {
  // Delay a bit so animation finishes smoothly
  setTimeout(() => {
    document.getElementById("loadingScreen").classList.add("hide");
  }, 2000); // adjust to match animation duration
});

//------------------- carousel ---------------------//
const images = [
  "/assets/img/Home/carousel/1.png",
  "/assets/img/Home/carousel/2.png",
  "/assets/img/Home/carousel/4.png",
  "/assets/img/Home/carousel/6.png",

  // "/add/new/img/here"
];

let currentIndex = 1;
const list = document.querySelector(".list");

function createSlide(src, classNames = []) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = src;
  li.appendChild(img);
  li.classList.add(...classNames);
  return li;
}

function setupCarousel() {
  list.innerHTML = "";

  const indices = [
    currentIndex - 1, // prev
    currentIndex, // act
    currentIndex + 1, // next
    currentIndex + 2, // new-next
  ];

  indices.forEach((i, idx) => {
    const safeIndex = (i + images.length) % images.length;
    const classes = ["prev", "act", "next", ["next", "new-next"]][idx];

    const slide = createSlide(
      images[safeIndex],
      Array.isArray(classes) ? classes : [classes]
    );
    list.appendChild(slide);
  });
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  setupCarousel();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  setupCarousel();
}

// Manual click
list.addEventListener("click", (e) => {
  const el = e.target.closest("li");
  if (!el) return;
  if (el.classList.contains("next")) next();
  else if (el.classList.contains("prev")) prev();
});

// Swipe
const swipe = new Hammer(document.querySelector(".swipe"));
swipe.on("swipeleft", next);
swipe.on("swiperight", prev);

// Autoplay every 4 seconds
setInterval(next, 4000);

// Initialize
setupCarousel();

//------------------- about us ---------------------//
function expandText() {
  var text = document.getElementById("text");
  text.classList.toggle("expanded");
  var seeMore = document.getElementById("seeMore");
  if (text.classList.contains("expanded")) {
    seeMore.innerText = "See less";
    text.style.marginBottom = "1rem";
  } else {
    seeMore.innerText = "See more";
    text.style.marginBottom = "0";
  }
}


// gallery
function showSection(section, e) {
  document.querySelectorAll('.fade-section').forEach(el => el.classList.remove('active'));
  document.getElementById(section).classList.add('active');
  document.querySelectorAll('.d-flex > .btn-modern').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  if (section === 'faculty') {
    document.querySelectorAll('#faculty .fade-section').forEach(el => el.classList.remove('active'));
    document.getElementById('basicEd').classList.add('active');
    document.querySelectorAll('#faculty .d-flex > .btn-modern').forEach(btn => btn.classList.remove('active'));
    document.querySelector('#faculty .d-flex > .btn-modern').classList.add('active');
  }
}

function showSubSection(sub, e) {
  document.querySelectorAll('#faculty .fade-section').forEach(el => el.classList.remove('active'));
  document.getElementById(sub).classList.add('active');
  document.querySelectorAll('#faculty .d-flex > .btn-modern').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
}