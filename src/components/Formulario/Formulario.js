import React, { Component } from 'react';

class Formulario extends Component {

    nombreRef = React.createRef();
    montoRef = React.createRef();

    agregarGasto = (e) => {

        e.preventDefault();

        const GASTO = {
            nombre: this.nombreRef.current.value,
            monto: this.montoRef.current.value
        }

        this.props.agregarGasto(GASTO);

        e.currentTarget.reset();
        
    }

  render() {
    return (
        <form onSubmit={this.agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreRef}/>
            </div>
        
            <div className="campo">
                <label>Cantidad</label>
                <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.montoRef}/>
            </div>
        
            <input className="button-primary u-full-width" type="submit" value="Agregar" />
        </form>
    );
  }
}

export default Formulario;