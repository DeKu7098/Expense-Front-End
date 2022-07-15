import React, { useState } from 'react';
import ExpenseItem from './component/ExpenseItem';
import './component/Expenses.css';
import './component/Card';
import Card from './component/Card';
import NewExpense from './component/NewExpense';
import ExpensesFilter from './component/ExpensesFilter';

const DUMMY_EXPENSES = [
  { 
    id:"e1",
    date: new Date(2022, 5,20),
    title: 'Food',
    amount: 10,
    locationOfExpenditure:'Food',
    place:'KFC',
  },
  { 
    id:"e2",
    date: new Date(2022, 5,21),
    title : 'Petrol',
    amount: 100,
    locationOfExpenditure: 'Petrol',
    place:'HP Petrol Pump',
  },
  {  
    id:"e3",
     date: new Date(2022, 5,22),
     title: 'Movies',
     amount: 200,
     locationOfExpenditure: 'Movies',
     place:'PvR',
  },

  {
    id:"e4",
    date: new Date(2022, 5,23),
    title: 'Anime',
    amount: 500,
    locationOfExpenditure: 'Anime',
    place:'Crunchyroll',
 },
];



const App = () => {
    
  const [expenses, SetExpenses] = useState(DUMMY_EXPENSES);
    
  const addExpenseHandler = (expense) =>{
     SetExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
     });
 };
 
 
 const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = (selectedYear) => {
     setFilteredYear(selectedYear);
   };
   const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
   });
 
 
   return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      { filteredExpenses.map((expense)=>{
        return (
          <ExpenseItem 
                  key={expense.id}
                  title={expense.title} 
                   date={expense.date}
                   amount={expense.amount}
                   place={expense.place}
                   location={expense.locationOfExpenditure}
          />
        )
      })
    }
    </Card>
    
  );
    }

export default App;
