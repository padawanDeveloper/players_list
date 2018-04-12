import React, { Component } from 'react';

import PlayersList from "../components/lists/players/PlayersList";
import TogglebleForm from "../components/forms/players/ToggableForm";
 
// App component - represents the whole app
export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      
      playersFromState: [{ name: "Diego" }, { name: "Matias" }, { name: "Pele"}, , { name: "Maradona"}]
    };
  }

  addPlayer = player => {
    let { playersFromState, formIsVisible } = this.state;
    this.setState({ playersFromState: playersFromState.concat(player) });
    console.log('click add');
  };

  render() {
  	let { playersFromState, formIsVisible } = this.state;
    return ( 	
        <PlayersList playersAsProps={playersFromState} submitPlayer={this.addPlayer}/>
    );
  }
}