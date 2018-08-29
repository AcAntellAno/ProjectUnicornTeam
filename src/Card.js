import React from 'react';

const Card = props => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`${props.image}`} alt="Members" />
      <div>
        <h2>Username: {props.username}</h2>
        <p>Team: {props.teamname}</p>
        <p>Github: {props.profile}</p>
      </div>
    </div>
  );
};

export default Card;
