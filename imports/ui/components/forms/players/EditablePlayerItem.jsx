import React, { Component } from "react";
import { PropTypes } from "prop-types";

import PlayerItem from "./PlayerItem";
import PlayerForm from "../../../components/forms/players/PlayerForm";

class EditablePlayerItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }

	toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleEdit = player => {
    this.props.editPlayer(player);
    this.toggleForm();
  };

  render() {
    const { showForm } = this.state;
    const { player } = this.props;
    return showForm ? (
      <PlayerForm player={player} edit={this.handleEdit} />
    ) : (
      <PlayerItem player={player} handleToggleForm={this.toggleForm} />
    );
  }
}

EditablePlayerItem.propTypes = {
  editPlayer: PropTypes.func,
  player: PropTypes.object
};

export default EditablePlayerItem;