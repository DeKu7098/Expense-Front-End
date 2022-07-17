import React, { useState } from 'react';
import './component/Expenses.css';
import './component/Card';
import Card from './component/Card';
import NewExpense from './component/NewExpense';
import ExpensesFilter from './component/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './component/ExpensesChart';

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
      {
        filteredExpenses.length === 1 && <p>Only single Expense here. Please add more...</p> 
      }
        
      {/* //   filteredExpenses.map((expense)=>
      //      {
      //       return (
      //                 <ExpenseItem 
      //                    key={expense.id}
      //                    title={expense.title} 
      //                    date={expense.date}
      //                    amount={expense.amount}
      //                    place={expense.place}
      //                    location={expense.locationOfExpenditure}
      //                  />
      //             )
      //      }
      //  )
      // };
} */}
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList expenses={filteredExpenses}/>
    </Card>
    
  );
    }

export default App;
