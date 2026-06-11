import React from "react";

class AppFormularioDois extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar() {
    const { nome, email, senha } = this.state;
    alert(
      `Estou cadastrando o(a) ${nome} com e-mail: ${email} e senha ${senha}`,
    );
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        <form onSubmit={this.cadastrar}>
          <span>Nome do usuário</span>
          <input
            type="text"
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br />

          <span>Email do usuário</span>
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />

          <span>Senha do usuário</span>
          <input
            type="password"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
          />
          <br />

          <button type="submit"> Cadastrar! </button>
        </form>
      </div>
    );
  }
}

export default AppFormularioDois;
