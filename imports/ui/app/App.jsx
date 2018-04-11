import React, { Component } from 'react';

import PlayersList from "../components/lists/players/PlayersList";
 
// App component - represents the whole app
export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      loading: true,
      playersFromState: [{ name: "Diego" }, { name: "Matias" }]
    };
  }

  render() {
  	let { playersFromState, loading } = this.state;
    return (
    	<div>
        <PlayersList playersAsProps={playersFromState}/>
      </div>
    );
  }
}