let displayValue = '';

// Function to update the display
function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

// append a value to display
function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

// clear the display
function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

// backspace function
function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}
// calculate function
function calculate() {
  let result = eval(displayValue);
  if (!isNaN(result)) {
    displayValue = result.toString();
  } else {
    displayValue = 'Error';
  }
  updateDisplay();
}

