import React from 'react';
import '../styles/App.css';
import '../styles/champions.css';
import Profile from './Profile.js'
import Search from './Search.js'
import MostPlayedChamps from './mostPlayedChamps.js';
import loading from '../images/teemo_dance.gif'
import exampleProfileData from '../example/exampleProfileData'
import exampleChampData   from '../example/exampleChampData'
import exampleRankData from '../example/exampleRankData';


//right now only works with NA accounts
//can set up a drop down menu for user to select region
//TODO Add Welcome Page that isnt example data

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

  //maybe componentDidUpdate??

  getProfile(search){
    let searchObj = {
      key : this.props.RIOT_API_KEY,
      search: search
    };

    //https://stackoverflow.com/questions/45992682/calling-functions-after-state-change-occurs-in-reactjs
    this.props.searchForProfile (searchObj, (profile) =>
      this.setState({

        loaded:true,
        currentProfile: profile

      }, () =>{
        this.rank()
        })
    );

  }

  rank(){
    this.props.getRank ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (rank) =>{
      this.setState({
        rankData: rank
        }, () => {
          this.props.searchForChamps ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (champData) =>
             this.setState({
              currentChamps: champData,
              loaded: true
             })
          );

      })
    });
  }

  componentDidUpdate(prevProps, prevState){
    /*
    if(this.state.encryptedId !== prevState.encryptedId){
      this.props.getRank ({encryptedId: this.state.currentProfile["id"], key: this.props.RIOT_API_KEY}, (rank) =>
      this.setState({
        rankData: rank
        })
      );
    }
    */
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

