import React from "react";

class AppEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "teste@email.com.br",
      senha: "",
      sexo: "Masculino",
    };

    this.trocarEmail = this.trocarEmail.bind(this);
    this.trocarSenha = this.trocarSenha.bind(this);
  }

  trocarEmail(event) {
    this.setState({ email: event.target.value });
  }

  trocarSenha(event) {
    this.setState({ senha: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.trocarEmail}
        />
        <br />
        Senha:
        <input
          type="password"
          name="senha"
          value={this.state.senha}
          onChange={this.trocarSenha}
        />
        <br />
        Sexo:
        <select
          name="sexo"
          value={this.state.sexo}
          onChange={(e) => this.setState({ sexo: e.target.value })}
        >
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
        <div>
          <h3>Dados do Usuário</h3>
          <p>Email: {this.state.email}</p>
          <p>Senha: {this.state.senha}</p>
          <p>Sexo: {this.state.sexo}</p>
        </div>
      </div>
    );
  }
}

export default AppEmail;
