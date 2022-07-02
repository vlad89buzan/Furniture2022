//scrollUp

function scrollToTop(selector, activeClass, position=window.innerHeight*1.5) {
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    const scrollUp = document.querySelector(selector);
    if (scrollY > position) {
      scrollUp.classList.add(activeClass);
    } else {
      scrollUp.classList.remove(activeClass);
    }
    scrollUp.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
}
export default scrollToTop;
