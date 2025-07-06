const openBtns = document.querySelectorAll(".openModal");
const closeBtns = document.querySelectorAll(".close");

// Open correct modal
openBtns.forEach(btn => {
  btn.onclick = () => {
    const modalId = btn.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  };
});

// Close any modal
closeBtns.forEach(btn => {
  btn.onclick = () => {
    btn.closest(".modal").style.display = "none";
  };
});

// Close modal on outside click
window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};