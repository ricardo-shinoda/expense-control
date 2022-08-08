import { useContext, useEffect, useState } from 'react';
import context from '../context/Context';
import style from '../style/Component.module.css';

function Api() {
    const { data } = useContext(context);
    const { id, setId } = useContext(context);
    const { value, setValue } = useContext(context);
    const { description, setDescription } = useContext(context);
    const { method, setMethod } = useContext(context);
    const { tag, setTag } = useContext(context);
    const { currency, setCurrency } = useContext(context);
    const [currencies, setCurrencies] = useState([]);
    const [rate, setRate] = useState([]);
    const { expense, setExpense } = useContext(context);
    // const { table, setTable } = useContext(context);
    const [table, setTable] = useState([])


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
            const urlRate = Number(urlJson[currency].ask);
            setRate(urlRate)
        };
        rate();
    });

    // const handleValChange = ({ target }) => { setValue(target.value) }
    const handleCurChange = ({ target }) => { setCurrency(target.value) }
    const handleMetChange = ({ target }) => { setMethod(target.value) }
    const handleCatChange = ({ target }) => { setTag(target.value) }
    const handleDescChange = ({ target }) => { setDescription(target.value) }

    const handleReset = (e) => {
        e.preventDefault();
        setId(id + 1);
        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = '')
        );
    }

    const handleExpense = () => {
        const valor = Number(expense) + Number(value) * (rate);
        setExpense(valor);
        setTable([setId]);
        setTable([setDescription]);
        setTable([setValue]);
        setTable([setCurrency]);
        setTable([setMethod]);
        setTable([setTag]);
        // console.log(rate);
        // console.log(currency);
        // console.log(table);
        // console.log(`'the id is:' ${id}`)
        // console.log(id)
        // console.log(value)
        // console.log(description)
        // console.log(currency)
        // console.log(method)
        // console.log(tag)
    }

    return (
        <div className={style.Component}>
            <form className={style.form}>
                <label
                    htmlFor="value"
                    data-testid="value-input"
                >
                    Valor
                    <input
                        className={style.input}
                        type="number"
                        // onChange={handleValChange}
                        onChange={(e) => setValue(e.target.value)}
                        name="value"
                        id="value"
                    ></input>
                </label>
                <label

                    htmlFor="currency"
                >Moeda
                    <select
                        className={style.input}
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
                    <select
                        className={style.input}
                    >
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
                    <select
                        className={style.input}
                    >
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
                        className={style.input}
                        type="texto"
                    >
                    </input>
                </label>
                <section>
                    <button
                        className={style.input}
                        name="button"
                        onClick={e => { handleReset(e); handleExpense() }}
                    >
                        Adicionar despesa
                    </button>
                </section>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Tag</th>
                        <th>Método de pagamento</th>
                        <th>Valor</th>
                        <th>Moeda</th>
                        <th>Câmbio utilizado</th>
                        <th>Valor convertido</th>
                        <th>Moeda de conversão</th>
                        <th>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((user) => (
                        <tr>
                            <td>{id}</td>
                            <td>{tag}</td>
                            <td>{method}</td>
                            <td>{ Number(value).toFixed(2) }</td>
                            <td>Real</td>
                            <td>{currency}</td>
                            <td>{value * rate}</td>
                            <td>{rate}</td>
                        </tr>
))}
            </tbody>
        </table>
        </div >
    )
};


export default Api;
