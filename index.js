var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");



submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercent = (loss / initial) * 100;
    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercent}%`);

  } else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPercent = (profit / initial) * 100;
      showOutput(`Hey the profit is ${profit} and the percent is ${profitPercent}%`);
  } else {
    showOutput(`no pain no gain and no gain no pain`);
  }
};
function showOutput(message) {

outputBox.innerHTML = message;
}