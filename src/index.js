import React from 'react';
import ReactDOM from 'react-dom';
import CounterButton from './04_props/Example4.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterButton />, document.getElementById('root'));
registerServiceWorker();
