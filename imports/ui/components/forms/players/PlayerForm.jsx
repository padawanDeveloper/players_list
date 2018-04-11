import React, { Component } from "react";
import { PropTypes } from "prop-types";

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name);
    let player = { name: this.state.name };
    this.props.submit(player);
    this.setState({ name: "" });
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log(event.target.value);
  };

  render() {

  let { name } = this.state;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="friend_name"
                type="text"
                className="validate"
                value={name}
                onChange={this.handleChange}
              />
              <label htmlFor="friend">Friend Name</label>
            </div>
            <div className="input-field col s12">
              <button type="submit" className="waves-effect waves-light btn">
                Player
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PlayerForm.propTypes = {
  submit: PropTypes.func.isRequired
}; 

export default PlayerForm;  