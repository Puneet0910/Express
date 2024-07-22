document.addEventListener("DOMContentLoaded", displayExpenses);

document.getElementById('expense-form').addEventListener('submit', handleFormData);

async function handleFormData(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const expenseDetails = {
        amount,
        description,
        category
    };

    await fetch('/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expenseDetails)
    });

    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';

    displayExpenses();
}

async function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    const response = await fetch('/api/expenses');
    const expenses = await response.json();

    expenses.forEach(expense => {
        let listItem = document.createElement('li');
        listItem.textContent = `${expense.amount} - ${expense.category} - ${expense.description}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', async () => {
            await fetch(`/api/expenses/${expense.id}`, {
                method: 'DELETE'
            });
            listItem.remove();
        });

        listItem.className = 'list-group-item';
        listItem.appendChild(deleteBtn);
        expenseList.appendChild(listItem);
    });
}
