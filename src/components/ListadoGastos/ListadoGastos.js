import React, { Component } from 'react'
import { Gasto } from './Gasto/Gasto';



export class ListadoGastos extends Component {
  render() {
    return (
      <div className="gastos-realizados">
            <h2>Listado</h2>
            {Object.keys( this.props.gastos ).map( key => (
                <Gasto key={key} gasto={this.props.gastos[key]} />
            ) ) }
            
      </div>
    )
  }
}

export default ListadoGastos
