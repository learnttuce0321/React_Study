import { useState } from 'react'
import Header from './Components/Header/Header';
import InvestmentList from './Components/InvestmentList/InvestmentList';
import InvestmentForm from './Components/Form/InvestmentForm';

function App() {
  const [investmentList, setInvestmentList] = useState([])

  const calculateHandler = (userInput) => {
    const yearlyData = []

    let yearlyTotalInterest = 0
    let investedCapital = +userInput['current-savings'];

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      yearlyTotalInterest += yearlyInterest;
      investedCapital += yearlyContribution
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        yearlyTotalInterest: yearlyTotalInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
      });
    }

    setInvestmentList(yearlyData)
    // do something with yearlyData ...
  };

  const resetHandler = () => {
    setInvestmentList([])
  }

  return (
    <div>
      <Header />

      <InvestmentForm resetHandler={resetHandler} calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentList investmentList={investmentList} />
    </div >
  );
}

export default App;
