//variables
const form = document.querySelector("#agregar-gasto"),
	listExpenses = document.querySelector("#gastos ul");

//Events

eventListeners();

function eventListeners() {
	document.addEventListener("DOMContentLoaded", askBugdet);

	document.addEventListener("submit", validateExpenses);
}

//Classes

class Budget {
	constructor(budget) {
		this.budget = budget;
		this.remaining = this.budget;
		this.expenses = [];
	}

	newExpense(expense) {
		this.expenses = [...this.expenses, expense];
		this.calculateRemaining();
	}

	calculateRemaining() {
		const expensed = this.expenses.reduce((total, expense) => total + expense.cantidad, 0);
        this.remaining = this.budget - expensed;
	}

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.calculateRemaining();
    }
}

class Ui {
	addBudget(quantity) {
		const { budget, remaining, expenses } = quantity;

		const totalBudget = document.querySelector("#total"),
			totalRemaining = document.querySelector("#restante");

		totalBudget.textContent = budget;
		totalRemaining.textContent = remaining;
	}

	messageText(text, type) {
		const div = document.createElement("div");

		if (type === "error") {
			div.classList.add("alert-danger");
		} else {
			div.classList.add("alert-success");
		}

		div.classList.add("text-center-alert", "alert");
		div.innerText = text;

		document.querySelector(".primario").insertBefore(div, form);

		setTimeout(() => {
			div.remove();
		}, 3000);
	}

	addExpenseList(expenses) {
		this.clearHtml();
		//iterate over each expense
		expenses.forEach((eachExpense) => {
			const { expense, cantidad, id } = eachExpense;

			//create LI
			const newExpense = document.createElement("li");
			newExpense.className =
				"list-group-item d-flex justify-content-between align-items-center";

			newExpense.dataset.id = id; //it is the moder way and means the same that: newExpense.setAttribute('data-id', id)

			//add html of the expense
			newExpense.innerHTML = `${expense} <span class="badge badge-primary badge-pill">$${cantidad}</span>`;

			//boton for clean the expense
			const btnRemove = document.createElement("button");
			btnRemove.classList.add("btn", "btn-danger", "borrar-gasto");
			btnRemove.innerHTML = `Remove &times;`;

			newExpense.appendChild(btnRemove);

            btnRemove.addEventListener('click', () => {
                removeExpense(id);
            });

			//add to HTML
			listExpenses.appendChild(newExpense);
		});
	}

	clearHtml() {
		while (listExpenses.firstChild) {
			listExpenses.firstChild.remove();
		}
	}

    percentageSpent(valueBudget) {
        const { budget, remaining } = valueBudget;

        const remainingDiv = document.querySelector(".restante");

        if ((budget /4) > remaining) {
            remainingDiv.classList.remove('alert-success', 'alert-warning');
            remainingDiv.classList.add('alert-danger');
        } else if ((budget / 2) > remaining) {
            remainingDiv.classList.remove('alert-success');
            remainingDiv.classList.add('alert-warning');
        } else {
            remainingDiv.classList.remove('alert-danger', 'alert-warning');
            remainingDiv.classList.add('alert-success');
        }

        if (remaining <= 0 ) {
            ui.messageText("The budget has run out", "error");
            document.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

let valueBudget; //instance class Bugdet

const ui = new Ui();

//Functions

function askBugdet() {
	const budget = Number(prompt("What is your weekly budget"));

	if (budget === "" || budget === null || isNaN(budget) || budget <= 0) {
		window.location.reload();
	}

	valueBudget = new Budget(budget);

	ui.addBudget(valueBudget);
}

function validateExpenses(e) {
	e.preventDefault();

	const expense = document.querySelector("#gasto").value,
		cantidad = Number(document.querySelector("#cantidad").value);

	if (expense === "" || cantidad === "") {
		ui.messageText("this field cant be empty", "error");
		return;
	} else if (isNaN(cantidad) || cantidad <= 0) {
		ui.messageText("this field cant be a minus value or zero", "error");
		return;
	} else {
		const userInfo = {
			expense,
			cantidad,
			id: Date.now(),
		};

		valueBudget.newExpense(userInfo);
	}

	ui.messageText("Expense added correctly");

	//print only expenses
	const { expenses } = valueBudget;

    //call for add a new expense
	ui.addExpenseList(expenses);

    //call for identify percentage of spent
    ui.percentageSpent(valueBudget);

    //clear expense and quantity field after add button
	form.reset();

    //call again to add new budget and remainig after add a expense
    ui.addBudget(valueBudget);
}

function removeExpense(id) {
    //remove expenses from class
    valueBudget.removeExpense(id);
 
    //remove expenses from html
    const { expenses } = valueBudget;

    ui.addExpenseList(expenses);
    ui.addBudget(valueBudget);

    ui.percentageSpent(valueBudget);


}
