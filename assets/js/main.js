// início do perrengue do gráfico

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart").getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "#0038FF");
  gradient.addColorStop(1, "#5A7FFF");

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Yellow", "Orange"],
      datasets: [
        {
          data: [12, 10],
          backgroundColor: gradient,
          borderWidth: 0,
          barPercentage: 0.5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: { display: false, drawBorder: false },
        },
        x: { grid: { display: false, drawBorder: false } },
      },
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { title: () => "" } },
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);
            if (!meta.hidden) {
              meta.data.forEach((element, index) => {
                const model = element._model;
                const value = index === 0 ? "R$69.996,00" : "R$104.037,43";
                ctx.fillStyle = "#000";
                ctx.font = "12px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "bottom";
                ctx.fillText(value, model.x, model.y - 10);
              });
            }
          });
        },
      },
      elements: {
        bar: {
          borderRadius: {
            topRight: 8,
            topLeft: 8,
            bottomRight: 0,
            bottomLeft: 0,
          },
        },
      },
    },
  });
});
// fim do inimigo
