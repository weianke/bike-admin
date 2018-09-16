import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/life';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
