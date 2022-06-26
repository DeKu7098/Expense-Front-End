import './ExpenseItem.css';


function ExpenseItem(props) {
//    const expenseDate = new Date(2022, 6, 22);
//    const expenseTitle = 'Food';
//    const expenseAmount = 10;

//    const expenseDate2 = new Date(2022, 6, 22);
//    const expenseTitle2 = 'Petrol';
//    const expenseAmount2 = 100;

//    const expenseDate3 = new Date(2022, 6, 22);
//    const expenseTitle3 = 'Movies';
//    const expenseAmount3 = 200;

//    const locationOfExpenditure = 'Movies';
//    const amountOfExpendature = 200;

    return <div className="expense-item">
        <div className="expense-item__description">
        <div>{props.date.toDateString()}</div>
            <h2>{props.title}</h2>
            <div>{props.place}</div>
            <div className="expense-item__price">Rs{props.amount}</div>
           
            {/* <div className="expense-item__price">Rs{props.amount}</div> */}
            {/* <div className="expense-item__location">{props.location}</div> */}
            
        {/* <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs{props.amount}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs{props.amount}</div> */}
        
        {/* <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs{props.amount}</div> */}
        </div>
        </div>
        // </div>
        // </div>
        // </div>
           
}

export default ExpenseItem;