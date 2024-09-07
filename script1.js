let screen = document.getElementById('screen');
let currentInput = '0';
function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateScreen();
}
function appendOperator(operator) {
    if (currentInput === '0' && operator === '-') {
        currentInput = '-';
    } else if (!isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
    }
    updateScreen();
}
function clearScreen() {
    currentInput = '0';
    updateScreen();
}
function backspace() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateScreen();
}
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = 'Error';
    }
    updateScreen();
}
function updateScreen() {
    screen.innerText = currentInput;
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    }
    if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key);
    }
    if (key === 'Enter') {
        calculate();
    }
    if (key === 'Backspace') {
        backspace();
    }
    if (key === 'Escape') {
        clearScreen();
    }
});