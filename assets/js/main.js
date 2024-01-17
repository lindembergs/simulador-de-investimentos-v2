let monthsSpan = document.querySelector(".months");
let monthsSlider = document.querySelector(".months-slider");

monthsSlider.addEventListener("input", () => {
  let updatedMonths = parseInt(monthsSlider.value);
  monthsSpan.textContent =
    updatedMonths === 1 ? "1 mês" : updatedMonths + " meses";
});
