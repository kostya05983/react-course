import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import  Lesson from "./14_portals/Lesson";

ReactDOM.render(<Lesson/>, document.getElementById('root'));
registerServiceWorker();
