import React, {Component} from 'react';
import './App.css';

import Botonera from './botonera/botonera'
import Contador from './contador/contador'
import Imagen from './imagen/imagen'


class App extends Component {

  constructor(){
    super()
    this.state = {
      valor: 1
    }
  }

  incrementar = () => {
    this.setState({...this.state, valor: this.state.valor + 1})
  }

  decrementar = () => {
    this.setState({...this.state, valor: this.state.valor - 1})

  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Imagen></Imagen>
        <Contador></Contador>
        <Botonera ></Botonera>


      </header>
    </div>
  )}
}

export default App;
