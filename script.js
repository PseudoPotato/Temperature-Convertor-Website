function convert(from) {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const resultElement = document.getElementById('result');
  
    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = parseFloat(fahrenheitInput.value);
  
    if (from === 'celsius' && !isNaN(celsiusValue)) {
      fahrenheitValue = (celsiusValue * 9/5) + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
      resultElement.innerText = `Result: ${celsiusValue} Celsius = ${fahrenheitValue} Fahrenheit`;
    } else if (from === 'fahrenheit' && !isNaN(fahrenheitValue)) {
      celsiusValue = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = celsiusValue.toFixed(2);
      resultElement.innerText = `Result: ${fahrenheitValue} Fahrenheit = ${celsiusValue} Celsius`;
    } else {
      resultElement.innerText = 'Invalid input. Please enter a valid number.';
    }
  }
  