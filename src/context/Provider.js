import React, { useState } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {
    const [data, setData] = useState([]);
    const [email, setEmail] = useState([]);
    const [senha, setSenha] = useState([]);

    const allData = {
        data, setData, senha, setSenha, email, setEmail
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