import React, { Component } from "react";

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('click handleSubmit');
    console.log(this.state.name + "VACIO");
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
                Agregar Amigo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
} 

export default PlayerForm;  