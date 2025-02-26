let display = document.getElementById("display");
let themeToggle = document.getElementById("theme-toggle");

// Append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
    try {
        display.value = eval(display.value.replace("%", "/100"));
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
    let key = event.key;

    // Allow numbers (0-9), operators, and decimal point
    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendToDisplay(key);
    } 
    // Enter key for calculation
    else if (key === "Enter") {
        event.preventDefault(); // Prevent form submission issues
        calculateResult();
    } 
    // Backspace for deleting last character
    else if (key === "Backspace") {
        deleteLast();
    } 
    // Escape for clearing display
    else if (key === "Escape") {
        clearDisplay();
    }
});


