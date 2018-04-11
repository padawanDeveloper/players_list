import React, { Component } from 'react';

import PlayersList from "../components/lists/players/PlayersList";
import TogglebleForm from "../components/forms/players/ToggableForm";
 
// App component - represents the whole app
export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      formIsVisible: true,
      playersFromState: [{ name: "Diego" }, { name: "Matias" }, { name: "Pele"}, , { name: "Maradona"}]
    };
  }

  toggleForm = () => {
    this.setState({ formIsVisible: !this.state.formIsVisible });
    console.log('click en togable');
  };

  addPlayer = player => {
    let { playersFromState } = this.state;
    this.setState({ playersFromState: playersFromState.concat(player) });
    console.log('click add');
  };

  render() {
  	let { playersFromState, formIsVisible } = this.state;
    return (
    	<div>
        <PlayersList playersAsProps={playersFromState}/>
        <TogglebleForm visible={formIsVisible} handleCreate={this.addPlayer}/>
        <a className="waves-effect waves-light btn" onClick={this.toggleForm}>
          Add Player
        </a>
      </div>
    );
  }
}