const exchangeRates = {
    COP: { USD: 0.00024, EUR: 0.00022 },
    USD: { COP: 4200, EUR: 0.93 },
    EUR: { COP: 4500, USD: 1.08 }
};

function convert() {
    const amountInput = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultDiv = document.getElementById("result");

    const amount = parseFloat(amountInput);

    
    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Por favor, ingresa una cantidad válida mayor a cero.";
        resultDiv.style.color = "red";
        return;
    }

    
    if (fromCurrency === toCurrency) {
        resultDiv.textContent = `Resultado: ${amount.toFixed(2)} ${toCurrency}`;
        resultDiv.style.color = "#1e3a8a";
        return;
    }

    
    const rate = exchangeRates[fromCurrency][toCurrency];

    
    const convertedAmount = amount * rate;
    resultDiv.textContent = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    resultDiv.style.color = "#1e3a8a";
}
 * rate;
    resultDiv.textContent = `Resultado: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    resultDiv.style.color = "#1e3a8a";
}
