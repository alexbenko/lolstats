import React from 'react';

var Profile = (props) => (

  <div className="prof">
     {console.log("From profile: ",props.rank)}
    <h3>{`Summoner: ${props.profile.name}`}</h3>
    <h3>{`Level: ${props.profile.summonerLevel}`}</h3>
    <h3>{`Solo-Duo Rank: ${props.rank[1].tier + ' ' + props.rank[1].rank}`}</h3>
    <h3>{`Total Wins This Season: ${props.rank[1].wins}`}</h3>
  </div>

);


export default Profile