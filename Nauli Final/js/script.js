let collapsibleHeaders = document.getElementsByClassName("accordion__header");
let arrow = document.querySelectorAll(".accordion__arrow");

Array.from(collapsibleHeaders).forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("accordion__open");
    arrow.classList.toggle("rotate");
  });
});
