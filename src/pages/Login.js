import React, { useState } from 'react';
import image from '../image/financialControl.png'
import style from '../style/Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        if (target.name === 'email') {
            setEmail(target.value);
        } else {
            setPassword(target.value);
        }
    }

    // const isDisabled = () => {
    //     const six = 6;
    //     let button = true;
    //     if (email.includes('@')
    //       && email.includes('.com')
    //       && password.length > six) {
    //       button = false;
    //     }
    //     return button;
    //   };

    const onClick = () => {
        localStorage.setItem('email', JSON.stringify({ email }));
        localStorage.setItem('password', JSON.stringify({ password }));
        navigate('/wallet');
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
                name="button"
                type="button"
                // disabled={ isDisabled() }
                onClick={ onClick }
            >
                Enter
            </button>
        </div>
    )
}

export default Login;

