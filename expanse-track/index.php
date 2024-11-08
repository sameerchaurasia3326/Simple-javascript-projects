<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="script.css">
</head>
<body>
    <div class="container">
        <div class="budget-section">
            <h2>Budget</h2>
            <input type="number" id="budget-input" placeholder="Enter Total Amount">
            <button onclick="setBudget()">Set Budget</button>
        </div>
        <div class="expense-section">
            <h2>Expenses</h2>
            <input type="text" id="expense-name" placeholder="Expense Name">
            <input type="number" id="expense-amount" placeholder="Amount">
            <button onclick="addExpense()">Check Amount</button>
        </div>
        <div class="summary">
            <div>Total Budget: <span id="total-budget">0</span></div>
            <div>Expenses: <span id="total-expenses">0</span></div>
            <div>Balance: <span id="balance">0</span></div>
        </div>
        <div class="expense-list">
            <h3>Expense List</h3>
            <ul id="expense-list"></ul>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
