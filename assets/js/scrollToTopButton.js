document.body.insertAdjacentHTML(
  "beforeend",
  ` <button class="btn-circle" id="btn-scrollToTop"><i class="fa-solid fa-angle-up"></i></button>`
);

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("btn-scrollToTop");

  window.addEventListener("scroll", () => {
    const halfPageHeight = document.documentElement.scrollHeight / 2;

    if (window.scrollY > halfPageHeight) {
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
});
