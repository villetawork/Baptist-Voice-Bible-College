// // --- FIRST SLIDER (Keep existing) ---
// let slideIndex = 0;
// let timeoutId = null;

// const slides = document.getElementsByClassName("fade");
// const dots = document.getElementsByClassName("dot");

// function showSlides() {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         dots[i].classList.remove('active');
//     }

//     if (slideIndex >= slides.length) slideIndex = 0;
//     if (slideIndex < 0) slideIndex = slides.length - 1;

//     slides[slideIndex].style.display = "block";
//     dots[slideIndex].classList.add('active');

//     timeoutId = setTimeout(() => {
//         slideIndex++;
//         showSlides();
//     }, 5000);
// }

// function currentSlide(index) {
//     slideIndex = index;
//     restartSlideshow();
// }

// function plusSlides(step) {
//     slideIndex += step;
//     restartSlideshow();
// }

// function restartSlideshow() {
//     clearTimeout(timeoutId);
//     showSlides();
// }

// // --- Start first slider ---
// window.onload = function () {
//     showSlides();
//     showSlides2(slideIndex2); // Also start second slider
// };

// // --- SECOND SLIDER (Outer with Inner) ---
// let slideIndex2 = 0;
// let innerIndex = 0;
// let timeoutInner = null;
// let timeoutOuter = null;

// const NEslides = document.querySelectorAll('.NESlideImg');

// function showSlides2(index) {
//     clearTimeout(timeoutInner);
//     clearTimeout(timeoutOuter);

//     NEslides.forEach(slide => {
//         slide.style.display = 'none';
//     });

//     slideIndex2 = index;
//     const currentSlide = NEslides[slideIndex2];
//     currentSlide.style.display = 'block';

//     const innerImages = currentSlide.querySelectorAll('.imgcontainer .NEImages img');
//     innerIndex = 0;

//     function showNextInnerImage() {
//         innerImages.forEach(img => {
//             img.parentElement.classList.remove('active');
//         });

//         innerImages[innerIndex].parentElement.classList.add('active');

//         innerIndex++;

//         if (innerIndex < innerImages.length) {
//             timeoutInner = setTimeout(showNextInnerImage, 3000);
//         } else {
//             timeoutOuter = setTimeout(() => {
//                 nextSlides(); // or however you're advancing
//             }, 3000);
//         }
//     }

//     showNextInnerImage();
// }

// function prevSlides() {
//     clearTimeout(timeoutInner);
//     clearTimeout(timeoutOuter);
//     slideIndex2 = (slideIndex2 - 1 + NEslides.length) % NEslides.length;
//     showSlides2(slideIndex2);
// }

// function nextSlides() {
//     clearTimeout(timeoutInner);
//     clearTimeout(timeoutOuter);
//     slideIndex2 = (slideIndex2 + 1) % NEslides.length;
//     showSlides2(slideIndex2);
// }
