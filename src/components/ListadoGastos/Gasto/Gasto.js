import React, { Component } from 'react'

export class Gasto extends Component {
  render() {

    const {monto, nombre} = this.props.gasto;

    return (
      <li className="gastos">
        <p>
            {nombre}
            <span className="gasto">$ {monto}</span>
        </p>
      </li>
    )
  }
}

export default Gasto
