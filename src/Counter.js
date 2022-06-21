import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ min, max }) {
    let [ current, setCurrent ] = useState(min);
    let [ tempCurrent, setTempCurrent ] = useState(min);

    function minus(){
        if (current > min) {
            setCurrent(current - 1);
            setTempCurrent(current - 1);
        }
    }

    function plus(){
        if (current < max) {
            setCurrent(current + 1);
            setTempCurrent(current + 1);
        }
    }

    function change(e){
        setTempCurrent(e.target.value);
    }

    function blur(e){
        if ( isNaN(parseInt(tempCurrent)) ) {
            setTempCurrent(current);
        } else if ( parseInt(tempCurrent) < min ) {
            setCurrent(min);
            setTempCurrent(min);
        } else if ( parseInt(tempCurrent) > max ) {
            setCurrent(max);
            setTempCurrent(max);
        } else {
            setCurrent(parseInt(e.target.value));
            setTempCurrent(parseInt(e.target.value));
        }
    }

    return (
        <div className="counter">
            <button type="button" onClick={ minus }>-</button>
            <input type="text" value={ tempCurrent } onChange={ change } onBlur={ blur } />
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