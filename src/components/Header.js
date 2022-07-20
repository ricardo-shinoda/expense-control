import React, { useContext } from 'react';
import style from '../style/Header.module.css';
import Context from '../context/Context';

export default function Header() {
    const { email } = useContext(Context);
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
                Despesa Total: </p>
            <p data-testid="header-currency-field" >BRL</p>
        </div>
    )
}