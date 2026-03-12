// ===== Scroll To Top Button =====
document.body.insertAdjacentHTML(
  "beforeend",
  `<button class="btn-circle" id="btn-scrollToTop" aria-label="Scroll To Top"><i class="fa-solid fa-angle-up" aria-hidden="true"></i></button>`
);

const scrollBtn = document.getElementById("btn-scrollToTop");

window.addEventListener("scroll", () => {
  const halfPageHeight = document.documentElement.scrollHeight / 2;

  if (window.scrollY > halfPageHeight) {
    scrollBtn.classList.add("active");
  } else {
    checkout - btn - cart
    scrollBtn.classList.remove("active");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
