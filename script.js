document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("projectCarousel");
  const dotsContainer = document.getElementById("carouselDots");
  const prevButton = document.getElementById("carouselPrev");
  const nextButton = document.getElementById("carouselNext");
 
  const slides = [...track.querySelectorAll(".carousel-slide")];
  let activeIndex = 0;
 
  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Ir a la imagen ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
 
  const dots = [...dotsContainer.querySelectorAll(".carousel-dot")];
 
  function goToSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
 
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === activeIndex);
    });
  }
 
  prevButton.addEventListener("click", () => goToSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => goToSlide(activeIndex + 1));
 
  goToSlide(0);
});