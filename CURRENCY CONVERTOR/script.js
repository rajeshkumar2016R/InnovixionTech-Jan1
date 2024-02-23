let fromAmount = document.querySelector('.amount');
let convertAmount = document.querySelector('.convertedAmount');
let fromCurrency = document.querySelector('.fromCurrency');
let toCurrency = document.querySelector('.toCurrency');
let result = document.querySelector('.result');

const countries = [
    {code:'USD', name: 'United State  Dollar'},
    {code:'INR', name: 'Indian Rupee'},
    {code:'AED', name: 'United Arab Emirates Dirham'},
    {code:'ARS', name: 'Argentine Peso'},
    {code:'AUD', name: 'Austrelian Dollar'},
    {code:'BRL', name: 'Brazilian Real'},
    {code:'CAD', name: 'Canadian Dollar'},
    {code:'CHF', name: 'Swiss Franc'},
    {code:'CLP', name: 'Chilean Peso'},
    {code:'CNY', name: 'Chinese Yuan'},
    {code:'COP', name: 'Colombisn Peso'},
    {code:'CYZ', name: 'Czech Koruna'},
    {code:'DKK', name: 'Danish Krone'},
    {code:'EGP', name: 'Egyptian Pound'},
    {code:'EUR', name: 'Euro'},
    {code:'GBP', name: 'British Pound Sterling'},
    {code:'HKD', name: 'Hong Kong Dollar'},
    {code:'VND', name: 'Vietnamese Dong'},
    {code:'ZAR', name: 'South African Rand'},
];

countries.forEach(country =>{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);

    fromCurrency.value = 'USD';
    toCurrency.value = 'INR';
})

const getExchangeRate = async () => {
    const amount = parseFloat(fromAmount.value);
    const fromCurrencyElement = fromCurrency.value;
    const toCurrencyElement = toCurrency.value;
    result.textContent = "Fetching ExchangeRate....."

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencyElement}`);
    
    const data = await response.json();
    
    const conversionRate = data.rates[toCurrencyElement];
    const conversionAmount = (amount * conversionRate).toFixed(2);
    convertAmount.value = conversionAmount;

    result.textContent = `${amount} ${fromCurrencyElement} = ${conversionAmount} ${toCurrencyElement}`;

}

fromAmount.addEventListener('input', getExchangeRate);
fromCurrency.addEventListener('change', getExchangeRate);
toCurrency.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);