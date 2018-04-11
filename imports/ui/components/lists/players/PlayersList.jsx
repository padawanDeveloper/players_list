import React, { Component } from "react";
import { PropTypes } from "prop-types";

import PlayerListItem from "./PlayerListItem";

class PlayersList extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    loading: true
	  };
	}

  render() {
  	const { playersAsProps } = this.props;

    return (
    	<ul className="collection with-header">
        <li className="collection-header">
          <h4>Lista de Jugadores</h4>
        </li>
        {playersAsProps.map(player => <PlayerListItem player={player} />)}
      </ul>
    );
  }
}

PlayersList.propTypes = {
  playersAsProps: PropTypes.array.isRequired
};

export default PlayersList;

