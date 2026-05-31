import React from "react";

export default function App() {
  const Equipe = (props) => {
    return (
      <span>
        <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
        <Social instagram="www.google.com.br" />

        <hr />
      </span>
    );
  };

  const Sobre = (props) => {
    return (
      <div>
        <h2>Olá sou o(a) {props.nome}</h2>
        <h3>Cargo: {props.cargo}</h3>
        <h3>Idade: {props.idade}</h3>
      </div>
    );
  };

  const Social = (props) => {
    return (
      <div>
        <a href={props.instagram}> instagram </a>
        <a href={props.face}> Facebook </a>
        <a href={props.twitter}> Twitter </a>
      </div>
    );
  };

  return (
    <div>
      <h1>Conheça nossa equipe!</h1>
      <Equipe nome="Lucas" cargo="Programador" idade="29" />

      <Equipe nome="Rodrigo" cargo="Programador" idade="36" />
    </div>
  );
}

class Sobre extends React.Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade}</h3>
      </div>
    );
  }
}
