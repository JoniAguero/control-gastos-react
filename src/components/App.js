import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';
import { ListadoGastos } from './ListadoGastos/ListadoGastos';

import { validarPresupuesto } from "../js/helper";
import { ControlPresupuesto } from './ControlPresupuesto/ControlPresupuesto';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      presupuesto: '',
      restante: '',
      gastos: {}
    }

  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto(){
    let presupuesto = prompt("Cuál es el presupuesto?");
    let resultado = validarPresupuesto(presupuesto);

    if(resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    } else {
      this.obtenerPresupuesto();
    }

  }

  agregarGasto = gasto => {

    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`] = gasto;

    this.setState({
      gastos
    })

  }

  render() {
    return (
      <div className="App container">
        <Header titulo="Control Gastos"/>
      
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarGasto = { this.agregarGasto }/>
            </div>
            <div className="one-half column">
              <ListadoGastos gastos={this.state.gastos} />
              <ControlPresupuesto 
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
               />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
