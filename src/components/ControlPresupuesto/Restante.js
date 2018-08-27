import React, { Component } from 'react'
import { revisarPresupuesto } from "../../js/helper";

export class Restante extends Component {
  render() {

    const presupuesto = this.props.presupuesto;
    const restante = this.props.restante;

    return (
        <div className={revisarPresupuesto(presupuesto, restante)}>
            <p> Restante: $ {this.props.restante} </p>
        </div>
    )
  }
}

export default Restante;
