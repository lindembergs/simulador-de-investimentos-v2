document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("myChart").getContext("2d");

  const gradientPoupanca = ctx.createLinearGradient(0, 0, 0, 300);
  gradientPoupanca.addColorStop(0, "#0038FF");
  gradientPoupanca.addColorStop(1, "#5A7FFF");

  const gradientLCI_LCA = ctx.createLinearGradient(0, 0, 0, 300);
  gradientLCI_LCA.addColorStop(0, "#0038FF");
  gradientLCI_LCA.addColorStop(1, "#5A7FFF");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Poupança", "LCI e LCA"],
      datasets: [
        {
          data: [80, 80],
          backgroundColor: [gradientPoupanca, gradientLCI_LCA],
          borderWidth: 0,
          barPercentage: 0.5,
          barThickness: 64, // Largura da barra
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
        tooltip: {
          callbacks: {
            title: () => "", // Remover título padrão do tooltip
          },
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
      layout: {
        padding: {
          top: 50, // Ajuste conforme necessário
        },
      },
    },
  });
});
