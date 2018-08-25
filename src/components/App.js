import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header/Header';
import Formulario from './Formulario/Formulario';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header titulo="Control Gastos"/>
      
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
