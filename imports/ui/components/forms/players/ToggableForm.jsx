import React from "react";
import { PropTypes } from "prop-types";

import PlayerForm from "./PlayerForm";

const ToggableForm = ({ visible }) => {
	console.log(visible);
  return visible && <PlayerForm/>;
};

ToggableForm.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default ToggableForm;