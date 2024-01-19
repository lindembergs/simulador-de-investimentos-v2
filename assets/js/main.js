const investmentSpan = document.querySelector("#investment-value");
const incrementButton = document.querySelector("#btn-sum");
const subtractButton = document.querySelector("#btn-subtract");
function incrementInvestmentValue() {
  const investmentValue = parseInt(
    investmentSpan.textContent
      .replace("R$ ", "")
      .replace(".", "")
      .replace(",", "")
  );
  let newValue = investmentValue + 50;
  investmentSpan.textContent = `R$ ${newValue.toLocaleString("pt-BR")}`;
  calculaLciLca();
}
function descrementInvestmentValue() {
  const investmentValue = parseInt(
    investmentSpan.textContent
      .replace("R$ ", "")
      .replace(".", "")
      .replace(",", "")
  );
  let newValue = investmentValue - 50;
  if (newValue <= 0) {
    newValue = 0;
    investmentSpan.textContent = `R$ ${newValue.toLocaleString("pt-BR")}`;
  } else {
    investmentSpan.textContent = `R$ ${newValue.toLocaleString("pt-BR")}`;
  }
  calculaLciLca();
}
incrementButton.addEventListener("click", incrementInvestmentValue);
subtractButton.addEventListener("click", descrementInvestmentValue);

function progressMonth() {
  let investmentTime = document.querySelector(".months");
  let rangeValue = document.querySelector(".months-slider").value;
  const rendimentoStrong = document.querySelector(".rendimento strong");

  rangeValue <= 1
    ? (investmentTime.innerHTML = `${rangeValue} mês`)
    : (investmentTime.innerHTML = `${rangeValue} meses`);
  rangeValue <= 1
    ? // aproveitamento da função do primeiro container pro segundo
      (rendimentoStrong.innerHTML = `${rangeValue} mês`)
    : (rendimentoStrong.innerHTML = `${rangeValue} meses`);
  rendimentoStrong.innerHTML;
}
document
  .querySelector(".months-slider")
  .addEventListener("input", progressMonth);

function calculaLciLca() {
  const investmentValue = parseInt(
    investmentSpan.textContent
      .replace("R$ ", "")
      .replace(".", "")
      .replace(",", "")
  );
  let newValue = investmentValue;
  let rendimentoSapan = document.querySelector(".rendimento span");

  rendimentoSapan.textContent = `R$ ${newValue.toLocaleString("pt-BR")}`;

  let aporteInicial = newValue;
  console.log(aporteInicial);
}
// início da seção de att dos valores das métricas //

// grafico
// grafico
// grafico
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
