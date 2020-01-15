// Qué archivos tendrá cada componente

// JS (el componente en sí)
// CSS
// SPEC (cuando yo pase los test, me diran las fucnones que están dentro si pasan los tests)
// MARKDOWN: la documentación de la botonera: cómo funciona la botonera

import React, {Component} from 'react';
import {connect} from 'react-redux'

class Botonera extends Component {

  render(){

    const { inc, dec } = this.props

  return (
    <div>
        <button onClick={inc}>Incrementar</button>
        <button onClick={dec}>Decrementar</button>
    </div>
  )}
}

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch({type: 'incrementar'}),
  dec: () => dispatch({type: 'decrementar'})
})

export default connect(null, mapDispatchToProps)(Botonera);