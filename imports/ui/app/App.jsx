import React, { Component } from 'react';

import PlayersList from "../components/lists/players/PlayersList";
import TogglebleForm from "../components/forms/players/ToggableForm";
 
// App component - represents the whole app
export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = { 
      playersFromState: [
      { id: Random.id(6), name: "Diego" }, 
      { id: Random.id(6), name: "Matias" }, 
      { id: Random.id(6), name: "Pele"}, , 
      { id: Random.id(6), name: "Maradona"}]
    };
  }

  addPlayer = player => {
    let { playersFromState, formIsVisible } = this.state;
    this.setState({ 
      playersFromState: playersFromState.concat(player) 
    });
    console.log('click add');
  };

  editPlayer = player => {
    let players = this.state.playersFromState;
    this.setState({
      playersFromState: players.map(f => {
        if (f.id == player.id) {
          return Object.assign({}, player);
        } else {
          return f;
        }
      })
    });
  };

  render() {
  	let { buttonIsVisible, playersFromState, formIsVisible } = this.state;
    return ( 	
        <PlayersList 
        playersAsProps={playersFromState} 
        submitPlayer={this.addPlayer}
        editPlayer={this.editPlayer}
        />
    );
  }
}