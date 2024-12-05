// Smooth scroll to the target section
function scrollToSection(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop - 60,  // Adjust the offset to match the header height
        behavior: "smooth"
    });
}