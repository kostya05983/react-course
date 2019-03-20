import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import News from "./16_api/containers/news/news";
// import  Lesson from "./15_context/Lesson";


ReactDOM.render(<News/>, document.getElementById('root'));
registerServiceWorker();
