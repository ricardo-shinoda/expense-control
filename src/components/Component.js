import { useContext, useEffect, useState } from 'react';
import context from '../context/Context';
import style from '../style/Component.module.css';

function Api() {
    const { currency, setCurrency } = useContext(context);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const data = async () => {
            const url = await fetch('https://economia.awesomeapi.com.br/json/all');
            const urlJson = await url.json();
            const urlArr = Object.keys(urlJson).filter((val) => val !== 'USDT');
            setCurrencies(urlArr);
        };
        data();
    }, []);


    const handleChange = ({ target }) => {
        setCurrency(target.value)
    }

    return (
        <div className={style.Component}>
            <section>
                <label htmlFor="value">Valor
                    <input
                        type="number"
                        name="value"
                        id="value"
                    />
                </label>
            </section>
            <section>
                <label htmlFor="currency">Moeda
                    <select
                        id="moeda"
                        name="currency"
                        value={currency}
                        onChange={handleChange}
                    >
                        {currencies.map((cur) => <option key={cur}>{cur}</option>)}
                    </select>
                </label>
            </section>
            <section>
                <label>Método de pagamento
                    <select>

                    </select>
                </label>
            </section>
            <section>
                <label>Tag
                    <select>

                    </select>
                </label>
            </section>
            <section>
                <label>Descrição
                    <input
                        type="text">
                    </input>
                </label>
            </section>
            <section>
                <button>Adicionar despesa</button>
            </section>
            <form>
                <label
                    htmlFor="description"
                    data-testid="description-input"
                >
                    Descrição
                </label>
                <label
                    htmlFor="tag"
                    data-testid="tag-input"
                >
                    Tag
                    <select>
                        <option>Alimentação</option>
                        <option>Lazer</option>
                        <option>Trabalho</option> 
                        <option>Transporte</option>
                        <option>Saúde</option>
                    </select>
                </label>
                <label
                    htmlFor="payment-method"
                    data-testid="method-input"
                >
                    Método de pagamento
                    <select>
                        <option>Dinheiro</option>
                        <option>Cartão de crédito</option>
                        <option>Cartão de débito</option>
                    </select>
                </label>
                <label
                    htmlFor="value"
                    data-testid="value-input"
                >
                    Valor
                </label>
                <label
                    htmlFor="currency"
                >Moeda
                    <select>
                        { currencies.map((cur) => <option key={cur}>{cur}</option>) }
                    </select>
                </label>
                <label
                    htmlFor="exchange"
                >
                    Câmbio utilizado
                </label>
                <label
                    htmlFor="exchange-value"
                >
                    Valor convertido
                </label>
                <label
                    htmlFor="exchange-rate"
                >
                    Moeda de conversão
                </label>
            </form>
        </div>
    )
};


export default Api;
