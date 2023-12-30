import Expenses from "./Components/Expenses/Expenses";
 const App=()=> {
  const expenses = [
    { title: 'Food', amount: 890.9, date: new Date(2023, 9, 23), location: "delhi" },
    { title: 'Mobile', amount: 8990.9, date: new Date(2023, 11, 23), location: "blp" },
    { title: 'Shoping', amount: 990.9, date: new Date(2023, 8, 8), location: 'brk' },
    { title: 'Chair', amount: 700.9, date: new Date(2023, 9, 27), location: "uk" },
    { title: 'Keybord', amount: 890.9, date: new Date(2023, 10, 25), location: "pnb" },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} ></Expenses>
    </div>
  );
}

export default App;
