1. playersFromState = variable que mantiene el estado en el constructor.
  * playersAsProps= Variable que se envia por props con el contenido de playersFromState.

2. playersAsProps.map(player => <PlayerListItem player={player}= hace un mapeo del objeto _"pAP"_ crea un  **player** con cada valor y lo enviamos por props a PlayerListItem.

3. let { playersFromState, formIsVisible } = this.state -> hace render a los estados de las variables  entre { }

4. this.setState({ formIsVisible: !this.state.formIsVisible }) -> cambia el valor del estado con el setState al contenido contrario 
  * onClick={this.toggleForm} -> el evento onClick activa la funcion toogleForm la cual hace el punto 4

5. const ToggableForm = ({ visible }) -> toma el props que se le pasa desde App.
  * return visible && h1 ToggableForm h1 -> si es _true_ muestra el form. 

6. export default (PlayerForm = () => ()) -> recive el return literalmente con los ()
  * export default (PlayerForm = () => {}) -> hay que escribir el return en la funcion.

7. onSubmit={this.handleSubmit} activa la funcion.
  * handleSubmit = event => {
    event.preventDefault();
    console.log('click');
  } -> la cual recibe el evento submit y manipulamos el preventDefaul.

8. constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }-> constructor con el name " vacio " 

9. onChange={this.handleChange} -> activa la function handleChange.
  * this.setState({ name: event.target.value })-> la que se encarga de setear el name con el valor del metodo target.

10. App envia la props con la funcion handleCreate a toggableForm, el cual envia un props "submit" con ese valor, el cual se lo pasa a PlayerForm. let player = { name: this.state.name }; this.props.submit(player); -> momento en el que se utiliza la funcion con el valor de la variable let.