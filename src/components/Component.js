import { useContext } from 'react';
import context from '../context/Context';
import style from '../style/Component.module.css';

function Api() {
    const { data } = useContext(context);
    console.log(data);
    return (
        <div className={ style.Component }>
            <h1>Esse é o Componente</h1>
            <p>{data}</p>
        </div>
)};


export default Api;
