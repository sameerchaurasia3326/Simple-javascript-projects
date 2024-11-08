<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Calculator</title>
    <link rel="stylesheet" href="script.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" value="0" disabled>
        <div class="buttons">
            <!-- Memory and Advanced Functionality Buttons -->
            <button onclick="clearMemory()">mc</button>
            <button onclick="recallMemory()">mr</button>
            <button onclick="memorySubtract()">m-</button>
            <button onclick="memoryAdd()">m+</button>
            
            <!-- Main Functional Buttons -->
            <button onclick="clearDisplay()">AC</button>
            <button onclick="appendToDisplay('Math.sqrt(')">√</button>
            <button onclick="appendToDisplay('%')">%</button>
            <button class="operator" onclick="appendToDisplay('/')">÷</button>
            
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('*')">×</button>
            
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button class="operator" onclick="appendToDisplay('-')">−</button>
            
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>
            
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="toggleSign()">+/−</button>
            <button class="operator" onclick="calculateResult()">=</button>
            
            <!-- Extra Functions -->
            <button onclick="appendToDisplay('Math.PI')">π</button>
            <button onclick="appendToDisplay('**')">xʸ</button>
            <button onclick="squareRoot()">R2</button>
            <button onclick="reset()">R0</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
