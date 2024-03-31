<?php

// Replace this with an actual API call to get real-time exchange rates
function getExchangeRate($fromCurrency, $toCurrency) {
    // Example: Fetch exchange rates from a hypothetical API
    $exchangeRates = [
        'USD' => ['EUR' => 0.85, 'GBP' => 0.74],
        'EUR' => ['USD' => 1.18, 'GBP' => 0.87],
        'GBP' => ['USD' => 1.36, 'EUR' => 1.15],
    ];

    return $exchangeRates[$fromCurrency][$toCurrency] ?? 1;
}

$amount = $_POST['amount'];
$fromCurrency = $_POST['fromCurrency'];
$toCurrency = $_POST['toCurrency'];

$exchangeRate = getExchangeRate($fromCurrency, $toCurrency);
$result = $amount * $exchangeRate;

echo json_encode(['result' => number_format($result, 2)]);
