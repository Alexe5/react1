import React from 'react';
import ReactDom from 'react-dom';

import Counter from './Counter';

ReactDom.render(
    <Counter min={3} max={15} />,
    document.querySelector('#app')
);