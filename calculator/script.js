let memory = 0;

function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1) || "0";
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        display.value = eval(display.value) || "0";
    } catch (error) {
        display.value = "Error";
    }
}

// Memory functions
function memoryAdd() {
    memory += parseFloat(document.getElementById("display").value) || 0;
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById("display").value) || 0;
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    document.getElementById("display").value = memory;
}

// Additional functions
function toggleSign() {
    const display = document.getElementById("display");
    display.value = parseFloat(display.value) * -1 || "0";
}

function squareRoot() {
    const display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value)) || "0";
}

function reset() {
    clearDisplay();
    clearMemory();
}
