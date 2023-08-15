import React from 'react'

const InvestmentList = ({ investmentList }) => {

    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    investmentList.length === 0 ? <tr><td colSpan={5} style={{ textAlign: 'center' }}>Please input your data</td></tr> : (
                        investmentList.map((item, index, list) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>$ {item.savingsEndOfYear}</td>
                                    <td>$ {item.yearlyInterest}</td>
                                    <td>$ {item.yearlyTotalInterest}</td>
                                    <td>$ {item.investedCapital}</td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </table>
    )
}

export default InvestmentList