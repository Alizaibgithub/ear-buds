const orderSummaries = document.querySelectorAll(".order-summary-details");

const handleResponsiveDetails = () => {
    orderSummaries.forEach(orderSummary => {
        if (window.innerWidth > 768) {
            orderSummary.setAttribute("open", "");
        } else {
            orderSummary.removeAttribute("open");
        }
    });
};

handleResponsiveDetails();

window.addEventListener("resize", handleResponsiveDetails);
