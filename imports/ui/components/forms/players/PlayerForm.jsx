import React from "react";

export default (FriendForm = () => (
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="friend_name" type="text" className="validate" />
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
));