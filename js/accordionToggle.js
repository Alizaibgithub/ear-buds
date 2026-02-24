const accordionDetails = document.querySelectorAll(".accordion-details");

accordionDetails.forEach((detail) => {

    const answer = detail.querySelector(".accordion-answer");

    detail.addEventListener("click", () => {
        accordionDetails.forEach((item) => {
            if (item !== detail) {
                item.removeAttribute("open");
            }
        });
        answer.classList.remove("active");
        void answer.offsetWidth;
        answer.classList.add("active");
    });
});
