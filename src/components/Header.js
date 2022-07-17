import React, { useContext } from 'react';
import style from '../style/Header.module.css';
import Context from '../context/Context';

export default function Header() {
    const { email } = useContext(Context);
    return (
        <div className={ style.header }>
            <h1>Expense Control</h1>
            <div>Email: {email} </div>
            <p>Despesa Total: </p>
        </div>
    )
}