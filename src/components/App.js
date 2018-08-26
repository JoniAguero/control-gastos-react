import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';
import { ListadoGastos } from './ListadoGastos/ListadoGastos';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      presupuesto: '',
      restante: '',
      gastos: {}
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
              <ListadoGastos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
