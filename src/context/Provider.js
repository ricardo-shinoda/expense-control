import React from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

function Provider({ children }) {
    return (
        <Context.Provider>
            { children }
        </Context.Provider>
    )
};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Provider;