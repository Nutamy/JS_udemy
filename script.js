// assignment 1
var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var expensesString = prompt("Введите обязательную статью расходов в этом месяце");
var expensesNumber = prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: expensesString + " : " + expensesNumber,
    optionalExpenses:undefined,
    income: [],
    savings: false
}

alert(
    "Итак, месячный бюджет: " + appData.budget + 
    ". С учётом " + appData.expenses +
    ". Ваш ежедневный бюджет составит: " +
    ((money - (+expensesNumber))/30) + " рублей."
);
