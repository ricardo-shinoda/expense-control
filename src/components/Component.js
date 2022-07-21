import { useContext, useState } from 'react';
import context from '../context/Context';
import style from '../style/Component.module.css';

function Api() {
    const { data } = useContext(context);
    console.log(data);
    const { currency, setCurrency } = useContext(context);
    const [currencies] = useState(['USD', 'CAD', 'EUR']);


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
                        value={ currency }
                        onChange={ handleChange }
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
