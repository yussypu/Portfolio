document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const heading = section.querySelector("h2");
    heading.addEventListener("click", function() {
      sections.forEach(s => s.classList.remove("active"));
      section.classList.add("active");
    });
  });
});
