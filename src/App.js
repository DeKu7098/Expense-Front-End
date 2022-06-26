import ExpenseItem from './component/ExpenseItem';


function App() {
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
  ];


  return (
    <div>
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
    </div>
    
  );
    }

export default App;
