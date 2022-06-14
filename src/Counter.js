import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ min, max }) {
    let [ current, setCurrent ] = useState(min);

    function minus(){
        if (current > min) {
            setCurrent(current - 1);
        }
    }

    function plus(){
        if (current < max) {
            setCurrent(current + 1);
        }
    }

    function change(e){
        if (isNaN(e.target.value) || e.target.value === '') {
            setCurrent(current);
        } else if (parseInt(e.target.value) < min) {
            setCurrent(min);
        } else if (parseInt(e.target.value) > max) {
            setCurrent(max);
        } else {
            setCurrent(parseInt(e.target.value));
        }
    }

    return (
        <div className="counter">
            <button type="button" onClick={ minus }>-</button>
            <input type="text" value={ current } onChange={ change } />
            <button type="button" onClick={ plus }>+</button>
        </div>
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