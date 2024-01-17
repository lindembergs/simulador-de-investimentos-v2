let monthsSpan = document.querySelector(".months");
let monthsSlider = document.querySelector(".months-slider");

monthsSlider.addEventListener("input", () => {
  let updatedMonths = parseInt(monthsSlider.value);
  monthsSpan.textContent =
    updatedMonths === 1 ? "1 mês" : updatedMonths + " meses";
});

// inicio do perrengue com os gráficos

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
