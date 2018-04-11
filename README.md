1. playersFromState = variable que mantiene el estado en el constructor.
  * playersAsProps= Variable que se envia por props con el contenido de playersFromState.

2. playersAsProps.map(player => <PlayerListItem player={player}= hace un mapeo del objeto _"pAP"_ crea un  **player** con cada valor y lo enviamos por props a PlayerListItem.