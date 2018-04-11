import React from "react";
import { PropTypes } from "prop-types";

import PlayerForm from "./PlayerForm";

const ToggableForm = ({ visible, handleCreate }) => {
	console.log(visible);
  return visible && <PlayerForm submit={handleCreate}/>;
};

ToggableForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCreate: PropTypes.func.isRequired
};

export default ToggableForm;