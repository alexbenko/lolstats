import React from 'react';
import Profile from './Profile.jsx'
import Search from './Search.jsx'
import MostPlayedChamps from './mostPlayedChamps.js';
import searchForProfile from './searchProfile.js';
import searchForChamps from './searchChamps.js';
import getRank from './getRank.js';



//right now only works with NA accounts
//can set up a drop down menu for user to select region


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      currentProfile: exampleProfileData,
      encyptedId: null,
      currentChamps: exampleChampData,
      rankData: exampleRankData
    }
  }



  getProfile(search){
    let searchObj = {
      key : this.props.RIOT_API_KEY,
      search: search
    };

    //https://stackoverflow.com/questions/45992682/calling-functions-after-state-change-occurs-in-reactjs
    searchForProfile (searchObj, (profile) =>
      this.setState({
        loded:true,
        currentProfile: profile

      }, () =>{
        this.rank()
        })
    );

  }

  rank(){
    getRank ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (rank) =>{
      this.setState({
        rankData: rank
        }, () => {
          searchForChamps ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (champData) =>
             this.setState({
              currentChamps: champData,
              loaded: true
             })
          );

      })
    });
  }

  render() {

    let {loaded} = this.state;

    if(!loaded){
      return (

        <div>
          <h1>LOLStats</h1>
          <nav className="nav">
            <Search handleSearchChange={this.getProfile.bind(this)} />
          </nav>

        </div>
      );
    }

      return (
        <div>
          <h1>LOLStats</h1>
          <nav className="nav">
            <Search handleSearchChange={this.getProfile.bind(this)} />
          </nav>

          <div className ='prof'>
            <Profile profile={this.state.currentProfile} rank={this.state.rankData} />
            <MostPlayedChamps champs={this.state.currentChamps}/>
          </div>

        </div>
      );

  };

}

export default App;

