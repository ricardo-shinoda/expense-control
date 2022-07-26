import React, { useState } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {
    const [data, setData] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [id, setId ] = useState(-1);
    const [value, setValue] = useState([]);
    const [description, setDescription] = useState([]);
    const [currency, setCurrency] = useState(['USD']);
    const [method, setMethod] = useState(['Dinheiro']);
    const [tag, setTag] = useState(['Alimentação']);
    const [expense, setExpense] = useState([]);

    const allData = {
        data, setData,
        password, setPassword,
        email, setEmail,
        id, setId,
        value, setValue,
        description, setDescription,
        currency, setCurrency,
        method, setMethod,
        tag, setTag,
        expense, setExpense,
    }

    return (
        <Context.Provider value={ allData }>
            { children }
        </Context.Provider>
    )
};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Provider;