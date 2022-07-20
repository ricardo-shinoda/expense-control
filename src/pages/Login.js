import React, { useState, useContext } from 'react';
import image from '../image/financialControl.png'
import style from '../style/Login.module.css';
import { useNavigate } from 'react-router-dom';
import context from '../context/Context';

function Login() {
    const { email, setEmail } = useContext(context);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    const onClick = () => {
        localStorage.setItem('email', JSON.stringify({ email }));
        localStorage.setItem('password', JSON.stringify({ password }));
        navigate('/carteira');
    };

   const isDisabled = () => {
        const six = 5;
        let button = true;
        if (email.includes('@') && email.includes('.com') && password.length > six) {
            button = false;
        } return button;
    };

    return (
        <div>
            <form className={style.login}>
                <h1 className={style.title}>Expense Control</h1>
                <img className={style.img} height='60px' alt="imagem" src={image} />
                <input
                    className={style.input}
                    type="email"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <input
                    className={style.input}
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
                <button
                    className={ style.button }
                    name="button"
                    disabled={ isDisabled() }
                    type="button"
                    onClick={onClick}
                >
                    Enter
                </button>
            </form>
        </div>
    )
}

export default Login;

