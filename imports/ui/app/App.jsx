import React, { Component } from 'react';

import PlayersList from "../components/lists/players/PlayersList";
 
// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
    	<div>
        <h1>Hola mundo</h1>
        <PlayersList/>
        </div>
    );
  }
}