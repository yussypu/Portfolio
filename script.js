document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const heading = section.querySelector("h2");
    heading.addEventListener("click", function() {
      section.classList.toggle("active");
    });
  });
});

