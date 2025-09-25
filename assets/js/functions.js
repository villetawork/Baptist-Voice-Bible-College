//------------------ mobile menu --------------------//

$(document).ready(function () {
  $(document).on("click", ".sub-btn", function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });
});

//---------------- loading screen ------------------//
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loading-screen");
  const logo = document.getElementById("loader-logo");
  const content = document.getElementById("main-content");

  function startLoaderSequence() {
    loader.style.display = "flex"; // show loader
    requestAnimationFrame(() => {
      loader.classList.add("show", "animate");
    });

    // Keep loader visible for the duration of the animation
    setTimeout(() => {
      loader.classList.add("hide");
      content.style.display = "block";
      requestAnimationFrame(() => {
        content.classList.add("show"); // fade in
      });

      // Optional: fully remove loader from DOM after fade
      setTimeout(() => loader.remove(), 800);
    }, 2000);
  }

  if (logo.complete) {
    startLoaderSequence();
  } else {
    logo.onload = startLoaderSequence;
  }
});

//------------------- carousel ---------------------//
const images = [
  "/assets/img/Home/carousel/1.png",
  "/assets/img/Home/carousel/2.png",
  "/assets/img/Home/carousel/4.png",
  "/assets/img/Home/carousel/6.png",
  "/assets/img/Home/carousel/8.png",

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

//------------------- college ---------------------//
// const sections = document.querySelectorAll('.full-width-section');
// const buttons = document.querySelectorAll('.toggle-btn');

// buttons.forEach(btn => {
//   btn.addEventListener('click', function () {
//     const targetId = this.dataset.target;
//     const targetSection = document.getElementById(targetId);
//     sections.forEach(sec => sec.style.display = 'none');
//     targetSection.style.display = 'block';
//   });
// });

// document.querySelectorAll('.close-btn').forEach(close => {
//   close.addEventListener('click', function () {
//     this.parentElement.style.display = 'none';
//   });
// });

//------------------- Admission ---------------------//
document.querySelectorAll(".section-header").forEach((header) => {
  const arrow = header.querySelector(".arrow");
  const targetId = header.getAttribute("data-bs-target");
  const collapseEl = document.querySelector(targetId);

  collapseEl.addEventListener('show.bs.collapse', () => {
    arrow.classList.add('arrow-rotated');
  });

  collapseEl.addEventListener('hide.bs.collapse', () => {
    arrow.classList.remove('arrow-rotated');
  });
});
//------------------- about us ---------------------//
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('note').classList.add('show');
  document.getElementById('showNoteBtn').remove();
});


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
  document
    .querySelectorAll(".fade-section")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(section).classList.add("active");
  document
    .querySelectorAll(".d-flex > .btn-modern")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  if (section === "faculty") {
    document
      .querySelectorAll("#faculty .fade-section")
      .forEach((el) => el.classList.remove("active"));
    document.getElementById("basicEd").classList.add("active");
    document
      .querySelectorAll("#faculty .d-flex > .btn-modern")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector("#faculty .d-flex > .btn-modern")
      .classList.add("active");
  }
}

function showSubSection(sub, e) {
  document
    .querySelectorAll("#faculty .fade-section")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(sub).classList.add("active");
  document
    .querySelectorAll("#faculty .d-flex > .btn-modern")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
}


//------------------- Facilities ---------------------//
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }
});