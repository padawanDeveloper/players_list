import React from "react";
import { PropTypes } from "prop-types";

const PlayerItem = ({ player, handleToggleForm }) => (
  <li className="collection-item">
    <div>
      Name: {player.name}
      <a className="secondary-content">
        <i className="material-icons" onClick={handleToggleForm}>
          edit
        </i>
      </a>
    </div>
  </li>
);

PlayerItem.propTypes = {
  player: PropTypes.object,
  handleToggleForm: PropTypes.func
};

export default PlayerItem;