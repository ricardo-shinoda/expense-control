import React, { useState } from 'react';
import image from '../image/financialControl.png'
import style from '../style/Login.module.css';

function Login() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const handleChange = ({ target }) => {
        if (target.name === 'email') {
            setEmail(target.value);
        } else {
            setPassword(target.value);
        }
    }

    const isDisable = () => {
        const SIX = 6;
        let button = true;
        if (email.includes('@') && email.includes('.com') && password.length > SIX) {
            button = false;
        } return button;
    };

    const onClick = () => {
        localStorage.setItem('email', JSON.stringify({ email }));
        localStorage.setItem('password', JSON.stringify({ password }));
    };

    return (
        <div>
            <form className={style.login}>
                <h1 className={style.title}>Expense Control</h1>
                <img className={style.img} height='60px' alt="imagem" src={image} />
                <input
                    className={style.input}
                    onChange={handleChange}
                    type="email"
                    placeholder="Digite seu email"
                >
                </input>
                <input
                    className={style.input}
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={handleChange}
                >
                </input>
            </form>
            <button
                type="button"
                // disabled={isDisable()}
                onClick={onClick}
            >
                Enter
            </button>
        </div>
    )
}

export default Login;
