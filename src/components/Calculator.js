import React, { Component } from 'react';
import './Calculator.css'

function Number(props) {
  return (
    <button className="number-button"
    onClick={props.onClick}>
      {props.value}
    </button>
);
}

function MathFtn(props) {
  return (
    <button className="math-ftn-button"
    onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Calculator extends Component {
  renderNumSquare(num) {
    return (
      <Number
      value={num}
      onClick={() => this.props.handleNumberClick(num)}
      />
    );
  }

  renderMathFtn(ftn) {
    return (
      <MathFtn
      value={ftn}
      onClick={() => this.props.handleMathFunction(ftn)}
      />
    )
  }

  render() {
    return (
      <section>
        <section id="display-box">
          DISPLAY BOX HERE
        </section>
        <table>
          <tbody>
            <tr className="calc-row">
              <td><button onClick={this.props.clear()}>AC</button></td>
              <td><button onClick={this.props.delete()}>Del</button></td>
              <td><button onClick={this.props.changeSign()}>+/-</button></td>
              <td>{this.renderMathFtn("/")}</td>
            </tr>
            <tr className="calc-row">
              <td>{this.renderNumSquare(7)}</td>
              <td>{this.renderNumSquare(8)}</td>
              <td>{this.renderNumSquare(9)}</td>
              <td>{this.renderMathFtn("*")}</td>
            </tr>
            <tr className="calc-row">
              <td>{this.renderNumSquare(4)}</td>
              <td>{this.renderNumSquare(5)}</td>
              <td>{this.renderNumSquare(6)}</td>
              <td>{this.renderMathFtn("-")}</td>
            </tr>
            <tr className="calc-row">
              <td>{this.renderNumSquare(1)}</td>
              <td>{this.renderNumSquare(2)}</td>
              <td>{this.renderNumSquare(3)}</td>
              <td>{this.renderMathFtn("+")}</td>
            </tr>
            <tr className="calc-row">
              <td>{this.renderNumSquare(0)}</td>
              <td></td>
              <td>{this.renderNumSquare(".")}</td>
              <td>{this.renderMathFtn("=")}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Calculator;
