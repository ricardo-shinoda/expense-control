import React, { useContext, useState } from 'react';
import style from '../style/Header.module.css';
import Context from '../context/Context';

export default function Header() {
    const { email } = useContext(Context);
    const { expense, setExpense } = useContext(Context)
    const [currency, setCurrency] = useState('BRL')
    const { rate, setRate } = useContext(Context);



    return (
        <div className={style.header}>
            <h1>Expense Control</h1>
            <p
                data-testid="email-field"
            >
                Email: {email} </p>
            <p
                data-testid="total-field"
            >
                Despesa total: { expense }
            </p>
            <p
                data-testid="header-currency-field"
                name="currency"
            >
                {currency}</p>
                <p>Rate: {rate}</p>
        </div>
    )
}