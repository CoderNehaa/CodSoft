let currentExpression = ''; // Variable to store the current expression
let displayElement = document.querySelector('.output');

function handleButtonClick(value) {
  // Handle numeric and operator button clicks
  if (value === '=') {
    evaluateExpression();
  } else if (value === 'C') {
    clearCalculator();
  } else {
    currentExpression += value;
    updateDisplay(currentExpression);
  }
}

function evaluateExpression() {
  try {
    const result = eval(currentExpression);
    updateDisplay(result);
    currentExpression = ''; // Reset currentExpression for the next calculation
  } catch (error) {
    updateDisplay('Error');
    currentExpression = ''; // Reset currentExpression on error
  }
}

function clearCalculator() {
  currentExpression = '';
  updateDisplay('');
}

function updateDisplay(value) {
    // Update the display element with the provided value
    document.getElementById('output').textContent = value;
}
  
function deleteLast() {
    // Delete the last character from the current expression
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay(currentExpression);
}