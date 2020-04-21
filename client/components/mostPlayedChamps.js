import React from 'react';
import getChampionName from './getChampionName.js';
import '../styles/champions.css';

var MostPlayedChamps = ({champs}) => {
  return (
  <div className="everything">
    <div>
      <h3>Most Played Champs</h3>
    </div>

    <div className="champList">


      {champs.map((champ) => {

        return (
          <div className="champions">
            <h3>{getChampionName(champ["championId"])}</h3>
          </div>
        );

      })}
    </div>

    </div>
  );
};

export default MostPlayedChamps;