// ===== Scroll To Top Button =====
document.body.insertAdjacentHTML(
  "beforeend",
  `<button id="btn-scrollToTop" class="btn-circle" aria-label="Scroll To Top"><i class="fa-solid fa-angle-up" aria-hidden="true"></i></button>`
);

const scrollBtn = document.getElementById("btn-scrollToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    scrollBtn.classList.add("active");
  } else {
    scrollBtn.classList.remove("active");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
