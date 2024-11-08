let totalBudget = 0;
let expenses = [];
let totalExpenses = 0;

function setBudget() {
    const budgetInput = document.getElementById('budget-input').value;
    if (budgetInput && !isNaN(budgetInput)) {
        totalBudget = parseInt(budgetInput);
        document.getElementById('total-budget').innerText = totalBudget;
        updateBalance();
    } else {
        alert("Please enter a valid budget amount");
    }
}

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseInt(document.getElementById('expense-amount').value);

    if (name && amount && !isNaN(amount)) {
        expenses.push({ name, amount });
        totalExpenses += amount;
        updateExpenseList();
        updateBalance();
    } else {
        alert("Please enter a valid expense name and amount");
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${expense.name} - ${expense.amount}
            <button onclick="deleteExpense(${index})">🗑️</button>
        `;
        expenseList.appendChild(listItem);
    });
    document.getElementById('total-expenses').innerText = totalExpenses;
}

function updateBalance() {
    const balance = totalBudget - totalExpenses;
    document.getElementById('balance').innerText = balance;
}

function deleteExpense(index) {
    totalExpenses -= expenses[index].amount;
    expenses.splice(index, 1);
    updateExpenseList();
    updateBalance();
}

