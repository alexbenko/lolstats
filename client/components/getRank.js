import axios from 'axios';

var getRank = ({encryptedId,key},cb) =>{
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let target = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}?api_key=${key}`;

  console.log("Getting Rank");
  axios.get(proxy + target)
  .then((res) =>{
    console.log("Resuts from Rank: ",res)
    cb(res.data);
  })
  .catch((err)=>{
    console.error("Error:",err);

  })
};

export default getRank;