import React, { Component } from "react";

const PlayerListItem = ({ player }) => (
  <li className="collection-item">{player.name}</li>
);

export default PlayerListItem;