import { useContext } from 'react';
import context from '../context/Context';

function Api() {
    const { data } = useContext(context);
    console.log(data);
    return (
        <div>
            <h2>Testando os dados da api</h2>
            <p>{data.code}</p>
        </div>
)};


export default Api;
