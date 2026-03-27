// ===== Overlay Toggle =====

const toggleOverlay = (section, elements, isOpen) => {
    section.classList.toggle("active", isOpen);
    backgroundOverlay.classList.toggle("active", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
    elements.forEach(el => el.style.opacity = isOpen ? "0.5" : "1");
};