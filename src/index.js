import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
  <Hello greeting={'This is' + ' my first prop'} />,
  document.getElementById('root')
);
registerServiceWorker();
