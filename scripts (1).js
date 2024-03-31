// Sample currency data, you can replace it with a more comprehensive list
const currencies = ['USD', 'EUR', 'GBP', 'JPY'];

document.addEventListener('DOMContentLoaded', function () {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    // Populate currency dropdowns
    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.text = option2.text = currency;
        option1.value = option2.value = currency;
        fromCurrencySelect.add(option1);
        toCurrencySelect.add(option2);
    });
});

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Replace this with an API call to get real-time exchange rates
    const exchangeRate = 1.2; // Example exchange rate

    const result = amount * exchangeRate;

    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
}
