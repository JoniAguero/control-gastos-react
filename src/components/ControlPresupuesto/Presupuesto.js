import React, { Component } from 'react'

export class Presupuesto extends Component {
  render() {
    return (
      <div className="alert alert-primary">
            <p> Presupuesto: $ {this.props.presupuesto} </p>
      </div>
    )
  }
}

export default Presupuesto;
