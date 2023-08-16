import React from 'react'
import styles from './InvestmentList.module.css'

const InvestmentList = ({ investmentItems }) => {
    return (
        <table className={styles.result}>
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
                    investmentItems.length === 0 ? <tr><td className={styles['no-input']} colSpan={5} style={{ textAlign: 'center' }}>Please input your data</td></tr> : (
                        investmentItems.map((item) => {
                            return (
                                <tr key={item.year}>
                                    <td>{item.year}</td>
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