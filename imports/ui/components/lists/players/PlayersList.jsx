import React, { Component } from "react";
import { PropTypes } from "prop-types";

import PlayerListItem from "./PlayerListItem";
import ToggableForm from "../../forms/players/ToggableForm";

class PlayersList extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    visible: props.playersAsProps.length > 0 ? false : true,
      showButton: true
	  };
	}

  toggleForm = () => {
    this.setState({
      visible: !this.state.visible,
      showButton: !this.state.showButton
    });
  };

  handleSubmit = player => {
    this.props.submitPlayer(player);
    this.setState({
      visible: !this.state.visible,
      showButton: !this.state.showButton
    });
  };
  render() {
  	const { handleSubmit, playersAsProps } = this.props;
    const { visible, showButton } = this.state;
    return (
    	<div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Lista de Amigos</h4>
          </li>
          {playersAsProps.map(player => <PlayerListItem player={player} />)}
        </ul>
        <ToggableForm visible={visible} handleCreate={this.handleSubmit} />
          {showButton && (
            <a className="btn" onClick={this.toggleForm}>
              Nuevo Amigo
            </a>
          )}
      </div>
    );
  }
}

PlayersList.propTypes = {
  submitPlayer: PropTypes.func.isRequired,
  playersAsProps: PropTypes.array.isRequired
};

export default PlayersList;

