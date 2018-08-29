import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { members } from './Members';

ReactDOM.render(
  <CardList members={members} />,
  document.getElementById('root')
);
registerServiceWorker();
