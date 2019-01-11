import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numsPressed: [],
      numsToCalc: [],
      lastEqual: "",
      isCalculating: false,
      display: ""
    }
}

handleNumberClick(num) {
  var numPressed = this.state.numsPressed;
  this.setState({ numsPressed: numPressed += num })
  console.log(this.state.numsPressed)
}

handleMathFunction(ftn) {
  console.log(ftn)
}

changeSign() {

}

delete() {

}

clear() {

}

setDisplay(display) {
  var toDisplay = this.state.display;
  this.setState({ display: toDisplay += display });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Calculator App
        </header>
        <section id="calculator">
          <Calculator
          handleNumberClick={(num) => this.handleNumberClick(num)}
          handleMathFunction={(ftn) => this.handleMathFunction(ftn)}
          changeSign={() => this.changeSign()}
          delete={() => this.delete()}
          clear={() => this.clear()}
          />
        </section>
      </div>
    );
  }
}

export default App;
