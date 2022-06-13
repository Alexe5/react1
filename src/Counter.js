import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ min, max }) {
    let [ current, setCurrent ] = useState(min);

    function minus(){
        if(current > min) {
            setCurrent(current - 1);
        }
    }

    function plus(){
        if(current < max) {
            setCurrent(current + 1);
        }
    }

    return (
        <>
            <button type="button" onClick={ minus }>-</button>
            <span>{ current }</span>
            {/* <input type="text" value={ current } /> */}
            <button type="button" onClick={ plus }>+</button>
        </>
    );
}

Counter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
}

Counter.defaultProps = {
    min: 1
}

export default Counter;