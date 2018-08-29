import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { members } from './Members';

ReactDOM.render(
  <div>
    <Card
      id={members[0].id}
      username={members[0].username}
      teamname={members[0].teamname}
      image={members[0].image}
      profile={members[0].link}
    />
    <Card
      id={members[1].id}
      username={members[1].username}
      teamname={members[1].teamname}
      image={members[1].image}
      profile={members[1].link}
    />
    <Card
      id={members[2].id}
      username={members[2].username}
      teamname={members[2].teamname}
      image={members[2].image}
      profile={members[2].link}
    />
    <Card
      id={members[3].id}
      username={members[3].username}
      teamname={members[3].teamname}
      image={members[3].image}
      profile={members[3].link}
    />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
