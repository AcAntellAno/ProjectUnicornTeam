import React from 'react';

const Card = ({ username, teamname, profile, image }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`${image}`} alt="Members" />
      <div>
        <h2>Username: {username}</h2>
        <p>Team: {teamname}</p>
        <p>Github: {profile}</p>
      </div>
    </div>
  );
};

export default Card;
