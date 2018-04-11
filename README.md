1. playersFromState = variable que mantiene el estado en el constructor.
  * playersAsProps= Variable que se envia por props con el contenido de playersFromState.

2. playersAsProps.map(player => <PlayerListItem player={player}= hace un mapeo del objeto _"pAP"_ crea un  **player** con cada valor y lo enviamos por props a PlayerListItem.

3. let { playersFromState, formIsVisible } = this.state -> hace render a los estados de las variables  entre { }

4. this.setState({ formIsVisible: !this.state.formIsVisible }) -> cambia el valor del estado con el setState al contenido contrario 
  * onClick={this.toggleForm} -> el evento onClick activa la funcion toogleForm la cual hace el punto 4

5. const ToggableForm = ({ visible }) -> toma el props que se le pasa desde App.
  * return visible && h1 ToggableForm h1 -> si es _true_ muestra el form. 