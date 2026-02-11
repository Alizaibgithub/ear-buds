const orderSummaries = document.querySelectorAll(".order-summary-container");

orderSummaries.forEach(orderSummary => {
    if (window.innerWidth > 768) {
        orderSummary.setAttribute("open", "");
    } else {
        orderSummary.removeAttribute("open");
    }
});
