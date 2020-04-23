import React from 'react';

var Profile = (props) => (

  <div className="prof">
     {console.log(props.rank[0].tier)}
    <h3>{`Summoner: ${props.profile.name}`}</h3>
    <h3>{`Level: ${props.profile.summonerLevel}`}</h3>
    <h3>{`Solo-Duo Rank: ${props.rank[0].tier + ' ' + props.rank[0].rank}`}</h3>
    <h3>{`Total Wins This Season: ${props.rank[0].wins}`}</h3>
  </div>

);


export default Profile