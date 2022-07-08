import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card';
import './ExpenseItem.css';

const  ExpenseItem = (props) => {
   
   const [title, setTitle] = useState(props.title);
   const [amount, setAmount] = useState(props.amount);
   
   
   
    const clickHandler = () =>{

        setTitle('Updated');
        console.log(title);
    }
    
    
    
    const deleteItem = () =>{
        console.log("Expense got Deleted");
    }

    const changeHandler = () =>{
        setAmount('100');
    }
 
 
 
 
    return (
       <Card className="expense-item">
        <ExpenseDate date={props.date} />
       <ExpenseDetails title={title}
                       amount={amount} />
        <button onClick={deleteItem}>Delete Expense</button>
       <button onClick={clickHandler}>Change Title</button>
       <button onClick={changeHandler}> Change Expense Amount</button>
        
       </Card> 
  );   
}

export default ExpenseItem;