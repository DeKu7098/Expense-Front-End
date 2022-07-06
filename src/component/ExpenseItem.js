import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from './Card';
import './ExpenseItem.css';

const  ExpenseItem = (props) => {
    const clickHandler = () =>{
        console.log("Clicked!!!!!");
    }
    const deleteItem = () =>{
        console.log("Expense got Deleted");
    }
  return (
       <Card className="expense-item">
        <ExpenseDate date={props.date} />
       <ExpenseDetails title={props.title}
                       amount={props.amount} />
        <button onClick={deleteItem}>Delete Expense</button>
       <button onClick={clickHandler}>Change Title</button>
        
       </Card> 
  );   
}

export default ExpenseItem;