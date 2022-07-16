import React from 'react';
import ExpenseItem from './component/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

if (props.expenses.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
}

      return <ul className="expenses-list">
         {props.expenses.map((expense)=>(
                      <ExpenseItem 
                         key={expense.id}
                         title={expense.title} 
                         date={expense.date}
                         amount={expense.amount}
                         place={expense.place}
                         location={expense.locationOfExpenditure}
                       />
                  ))}
      </ul>
};

export default ExpensesList;