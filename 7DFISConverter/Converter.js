function convertCurrency(amount, fromCurrency, toCurrency) {
  const rates = {
    "рубли": 1,
    "доллары": 94,
    "евро": 103
  };

  if (!rates.hasOwnProperty(fromCurrency) || !rates.hasOwnProperty(toCurrency)) {
    return null;
  }

  const amountInRub = amount * rates[fromCurrency];
  const result = amountInRub / rates[toCurrency];

  return result;
}