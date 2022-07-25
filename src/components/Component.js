import { useContext, useEffect, useState } from 'react';
import context from '../context/Context';
import style from '../style/Component.module.css';

function Api() {
    const { id, setId } = useContext(context);
    const { value, setValue } = useContext(context);
    const { description, setDescription } = useContext(context);
    const { method, setMethod } = useContext(context);
    const { tag, setTag } = useContext(context);
    const { currency, setCurrency } = useContext(context);
    const [currencies, setCurrencies] = useState([]);
    const [rate, setRate] = useState([]);
    const { gastos, setGastos } = useContext(context);

    useEffect(() => {
        const data = async () => {
            const url = await fetch('https://economia.awesomeapi.com.br/json/all');
            const urlJson = await url.json();
            const urlArr = Object.keys(urlJson).filter((val) => val !== 'USDT');
            setCurrencies(urlArr);
        };
        data();
    }, []);

    useEffect(() => {
        const rate = async () => {
            const url = await fetch('https://economia.awesomeapi.com.br/json/all');
            const urlJson = await url.json();
            const urlRate = Object.keys.bind(urlJson);
            setRate(urlRate)
        };
        rate();
    }, [id]) 

    const handleValChange = ({ target }) => {setValue(target.value)}
    const handleCurChange = ({ target }) => {setCurrency(target.value)}
    const handleMetChange = ({ target }) => {setMethod(target.value)}
    const handleCatChange = ({ target }) => {setTag(target.value)}
    const handleDescChange = ({ target }) => {setDescription(target.value)}

   const handleReset = (e) => {
    e.preventDefault();
    setId(id + 1);
    Array.from(document.querySelectorAll('input')).forEach(
        input => (input.value = '')
    );
   }

   const handleExpense = (target) => {
    setGastos(gastos + target.value)
   }



    return (
        <div className={style.Component}>
            <form>
                <label
                    htmlFor="value"
                    data-testid="value-input"
                >
                    Valor
                    <input
                        type="number"
                        onChange={e => {handleValChange(e); handleExpense(e)}}
                        // ={ handleExpense }
                        name="value"
                        id="value"
                    ></input>
                </label>
                <label
                    htmlFor="currency"
                >Moeda
                    <select
                        onChange={handleCurChange}>
                        {currencies.map((cur) => <option key={cur}>{cur}</option>)}
                    </select>
                </label>
                <label
                    htmlFor="payment-method"
                    data-testid="method-input"
                    onChange={handleMetChange}
                >
                    Método de pagamento
                    <select>
                        <option>Dinheiro</option>
                        <option>Cartão de crédito</option>
                        <option>Cartão de débito</option>
                    </select>
                </label>
                <label
                    htmlFor="tag"
                    data-testid="tag-input"
                    onChange={handleCatChange}
                >
                    Categoria
                    <select>
                        <option>Alimentação</option>
                        <option>Lazer</option>
                        <option>Trabalho</option>
                        <option>Transporte</option>
                        <option>Saúde</option>
                    </select>
                </label>
                <label
                    htmlFor="description"
                    data-testid="description-input"
                    onChange={handleDescChange}
                >
                    Descrição
                    <input
                        type="texto"
                    >
                    </input>
                </label>
                <section>
                    <button
                        onClick={handleReset}
                    >
                        Adicionar despesa
                    </button>
                </section>
            </form>
        </div>
    )
};


export default Api;
