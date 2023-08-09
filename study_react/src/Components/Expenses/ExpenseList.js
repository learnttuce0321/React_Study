import React from "react";
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (!props.filteredItem.length) {
        return <h2 className="expenses-lst__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.filteredItem.map((item) => {
                    return (
                        <ExpenseItem
                            // key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                })
            }
        </ul>
    )
}

export default ExpensesList