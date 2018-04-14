import React from "react";
import { PropTypes } from "prop-types";



const PlayerItem = ({ player, handleToggleForm, onDeletePlayerClick }) => (
  <li className="collection-item">
    <div>
      Name: {player.name}
      <a className="secondary-content">
        <i className="material-icons" onClick={handleToggleForm}>
          edit
        </i>
        <i
          className="material-icons red-text"
          onClick={event => {
            onDeletePlayerClick(player.id);
          }}
        >
          delete
        </i>
      </a>
    </div>
  </li>
);

PlayerItem.propTypes = {
  onDeletePlayerClick: PropTypes.func,
  player: PropTypes.object,
  handleToggleForm: PropTypes.func
};

export default PlayerItem;