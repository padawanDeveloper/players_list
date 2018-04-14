import React, { Component } from "react";
import { PropTypes } from "prop-types";

import EditablePlayerItem from "./EditablePlayerItem";
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
    console.log(this.props.playersAsProps.length);
    this.setState({
      visible: !this.state.visible,
      showButton: !this.state.showButton
    });
  };

  handleEditPlayer = player => {
    this.props.editPlayer(player);
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
          {playersAsProps.map(player => (
            <EditablePlayerItem
              key={player.id}
              player={player}
              editPlayer={this.handleEditPlayer}
            />
          ))}
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
  editPlayer: PropTypes.func.isRequired,
  submitPlayer: PropTypes.func.isRequired,
  playersAsProps: PropTypes.array.isRequired
};

export default PlayersList;

