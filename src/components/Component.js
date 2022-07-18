import { useContext } from 'react';
import context from '../context/Context';
import style from '../style/Component.module.css';

function Api() {
    const { data } = useContext(context);
    const { currency, setCurrency } = useContext(context);
    const currencies = data;

    // ['UDS', 'USDT', 'CAD', 'GBP', 'ARS', 'BTC', 'LTC', 'EUR', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'EHT', 'XRP', 'DOGE']
    console.log(data);

    const handleChange = ({ target, name }) => {
        setCurrency({ [name]: target.value })
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
        </div>
    )
};


export default Api;
