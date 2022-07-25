import React, { useContext, useState } from 'react';
import style from '../style/Header.module.css';
import Context from '../context/Context';

export default function Header() {
    const { email } = useContext(Context);
    const [ gastos ] = useState('0')
    const [currency, setCurrency] = useState('BRL')


  
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
                Despesa Total: { gastos }</p>
            <p
                data-testid="header-currency-field"
                name="currency"
            >
                {currency}</p>
        </div>
    )
}