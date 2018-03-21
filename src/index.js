import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from './components/Terminal.jsx'

const title = 'My Minimal React Webpack Babel Setup';
const app = document.getElementById('app');

ReactDOM.render(<Terminal/>, app);
module.hot.accept();
