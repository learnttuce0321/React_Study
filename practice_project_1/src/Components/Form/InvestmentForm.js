import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const InvestmentForm = ({ resetHandler, calculateHandler }) => {
    const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm();
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset])
    return (
        <form className="form" onSubmit={handleSubmit((data) => {
            calculateHandler(data)
        })}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" {...register('current-savings')} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" {...register('yearly-contribution')} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" {...register('expected-return')} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" {...register('duration')} />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InvestmentForm