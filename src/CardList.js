import React from 'react';
import Card from './Card';

const CardList = ({ members }) => {
  return (
    <div>
      {members.map((mem, i) => {
        return (
          <Card
            key={i}
            id={members[i].id}
            username={members[i].username}
            teamname={members[i].teamname}
            image={members[i].image}
            profile={members[i].link}
          />
        );
      })}
    </div>
  );
};

export default CardList;
