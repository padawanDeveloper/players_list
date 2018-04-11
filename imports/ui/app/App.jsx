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

  render() {
  	let { playersFromState, formIsVisible } = this.state;
    return (
    	<div>
        <PlayersList playersAsProps={playersFromState}/>
        <TogglebleForm visible={formIsVisible} />
      </div>
    );
  }
}