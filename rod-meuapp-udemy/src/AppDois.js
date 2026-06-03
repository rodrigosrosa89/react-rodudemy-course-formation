import React from "react";
import { useState } from "react";
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Rodrigo",
      contador: 0,
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  diminuir() {
    if (this.state.contador === 0) {
      return;
    }
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h2>Meu nome: {this.state.nome}</h2>
        <h3>Contador: {this.state.contador}</h3>
        <button onClick={this.diminuir}>-</button>
        {this.state.contador}
        <button onClick={this.aumentar}>+</button>
      </div>
    );
  }
}

function Rod() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };
}

export default App2;
