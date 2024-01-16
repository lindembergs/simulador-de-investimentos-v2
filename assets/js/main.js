// Obtém a referência para o elemento canvas
let ctx = document.getElementById("meuGrafico").getContext("2d");

// Obtém a referência para o elemento span que contém o número de meses
let monthsSpan = document.querySelector(".months");

// Dados iniciais do gráfico
let initialMonths = parseInt(monthsSpan.textContent);
let initialData = Array(initialMonths).fill(0);

let data = {
  labels: Array.from({ length: initialMonths }, (_, i) => i + 1),
  datasets: [
    {
      label: "Quantidade de Meses",
      data: initialData,
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

let config = {
  type: "line",
  data: data,
  options: {
    animation: {
      onProgress: function (animation) {
        // Atualiza dinamicamente o número de meses durante a animação
        let progress = animation.currentStep / animation.numSteps;
        let updatedMonths = Math.round(initialMonths * progress);
        monthsSpan.textContent = updatedMonths + " Meses";

        // Atualiza os dados do gráfico com base no número de meses atualizado
        let newData = Array(updatedMonths).fill(0);
        chart.data.datasets[0].data = newData;
        chart.update();
      },
    },
  },
};

let chart = new Chart(ctx, config);
