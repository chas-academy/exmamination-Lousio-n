const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balance = document.getElementById("balance")

const expenses = []
const income = []

incomeBtn.addEventListener("click", () => {
    let newIncomeObj = {description: desc.value, amount: +amount.value, type: "income"}
    income.push(newIncomeObj)
    desc.value = ""
    amount.value = ""
    updateLists()
    calculateTotal()
})

expenseBtn.addEventListener("click", () => {
    let newExpenseObj = {description: desc.value, amount: +amount.value, type: "expense"}
    expenses.push(newExpenseObj)
    desc.value = ""
    amount.value = ""
    updateLists()
    calculateTotal()
})

function updateLists() {
    incomeList.replaceChildren("")
    expenseList.replaceChildren("")
    transactionList.replaceChildren("")

    for (let i of expenses) {
        let item = document.createElement("li")
        item.textContent = `${i.description} - ${i.amount} kr (Utgift)`
        expenseList.appendChild(item)
    }

    for (let i of income) {
        let item = document.createElement("li")
        item.textContent = `${i.description} - ${i.amount} kr (Inkomst)`
        incomeList.appendChild(item)
    }
}

function calculateTotal() {
    let totalExpenses = 0
    let totalIncome = 0

    for (let n of expenses) {
        totalExpenses += n.amount
    }

    for (let n of income) {
        totalIncome += n.amount
    }

    balance.textContent = totalIncome - totalExpenses
}

