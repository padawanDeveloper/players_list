import React, { Component } from "react";
import { PropTypes } from "prop-types";

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: Random.id(5)
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let player = {
      id: this.state.id,
      name: this.state.name
    };
    this.props.player ? this.props.edit(player) : this.props.submit(player);
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log(event.target.value + "esto otro");
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      name: nextProps.player.name,
      id: nextProps.player.id
    };
  }

  componentDidMount() {
     Materialize.updateTextFields();
  }

  render() {
    const { player } = this.props;
    const { name } = this.state;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="player_name"
                type="text"
                className="validate"
                value={name}
                onChange={this.handleChange}
              />
              <label htmlFor="player">Player Name</label>
            </div>
            <div className="input-field col s12">
              <button type="submit" className="waves-effect waves-light btn">
                {player ? "Editar" : "Agregar"} Player
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PlayerForm.propTypes = {
  player: PropTypes.object,
  submit: PropTypes.func,
  edit: PropTypes.func
}; 

export default PlayerForm;  