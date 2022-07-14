import React, { useState } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {
    const [data, setData] = useState([]);

    const ApiData = { data }
    return (
        <Context.Provider value={ ApiData }>
            { children }
        </Context.Provider>
    )
};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Provider;