import React, { useState, useEffect } from 'react';

import ExpenseList from './ExpenseList'
import Card from '../UI/Card';
import Filter from '../Filter/Filter'
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2021)

  const filterChangeHandler = (year) => {
    setSelectedYear(Number(year))
  }

  const filteringYear = (items) => {
    return items.filter((item) => {
      return item.date.getFullYear() === selectedYear
    })
  }
  const filteredItem = filteringYear(props.items)

  console.log(filteredItem)

  return (
    <Card className="expenses">
      <Filter year={selectedYear} onFilterChange={filterChangeHandler} />
      <ExpenseChart expenses={filteredItem} />
      <ExpenseList filteredItem={filteredItem} />
    </Card>
  );
}

export default Expenses;