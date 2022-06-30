import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "呷上飽",
      amount: 94,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "串流平台", amount: 799, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "手遊課金",
      amount: 294,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "牛排",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("at App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
