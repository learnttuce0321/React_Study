import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Card from '../Card/Card';
import Button from '../Button/Button';

const RegisterForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm();


    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset])

    return (
        <Card className='registerForm'>
            <form onSubmit={handleSubmit((data) => onSubmit(data))} method='post'>
                <label htmlFor='userName'>Username</label>
                <input type='text' id='userName' {...register('userName')}></input>
                <label htmlFor='userAge'>Age(years)</label>
                <input type='number' id='userAge' {...register('userAge')}></input>
                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    )

}

export default RegisterForm