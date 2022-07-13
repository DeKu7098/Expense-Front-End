import ExpenseItem from './component/ExpenseItem';
import './component/Expenses.css';
import './component/Card';
import Card from './component/Card';
import NewExpense from './component/NewExpense';



const App = () => {
  const expenses = [
    { 
      date: new Date(2022, 5,20),
      title: 'Food',
      amount: 10,
      locationOfExpenditure:'Food',
      place:'KFC',
    },
    { 
      date: new Date(2022, 5,21),
      title : 'Petrol',
      amount: 100,
      locationOfExpenditure: 'Petrol',
      place:'HP Petrol Pump',
    },
    {
       date: new Date(2022, 5,22),
       title: 'Movies',
       amount: 200,
       locationOfExpenditure: 'Movies',
       place:'PvR',
    },

    {
      date: new Date(2022, 5,23),
      title: 'Anime',
      amount: 500,
      locationOfExpenditure: 'Anime',
      place:'Crunchyroll',
   },
  ];
 const addExpenseHandler = expense =>{
  console.log('app');
  console.log(expense);
 }

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      { expenses.map((expense)=>{
        return (
          <ExpenseItem title={expense.title} 
                   date={expense.date}
                   amount={expense.amount}
                   place={expense.place}
                   location={expense.locationOfExpenditure}>
          </ExpenseItem>
        )
      })
    }
    </Card>
    
  );
    }

export default App;
