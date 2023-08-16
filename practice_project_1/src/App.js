import { useState } from 'react'
import Header from './Components/Header/Header';
import InvestmentList from './Components/InvestmentList/InvestmentList';
import InvestmentForm from './Components/Form/InvestmentForm';

function App() {
  const [investmentItems, setInvestmentItems] = useState([])

  const calculateHandler = (userInput) => {
    const yearlyData = []

    let yearlyTotalInterest = 0
    let investedCapital = +userInput['current-savings'];

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      yearlyTotalInterest += yearlyInterest;
      investedCapital += yearlyContribution
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        yearlyTotalInterest: yearlyTotalInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
      });
    }

    return yearlyData
  };

  const onSubmit = (userInput) => {
    const yearlyData = calculateHandler(userInput)
    setInvestmentItems(yearlyData)

  }

  const resetHandler = () => {
    setInvestmentItems([])
  }

  return (
    <div>
      <Header />

      <InvestmentForm onReset={resetHandler} onSubmit={onSubmit} />

      <InvestmentList investmentItems={investmentItems} />
    </div >
  );
}

export default App;
