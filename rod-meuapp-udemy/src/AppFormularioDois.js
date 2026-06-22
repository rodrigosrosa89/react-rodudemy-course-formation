import React from "react";

class AppFormularioDois extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: "",
        email: "",
        senha: "",
        sexo: "",
      },
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(event) {
    const { nome, email, senha } = this.state.form;

    if (nome !== "" && email !== "" && senha !== "") {
      alert(
        `Estou cadastrando o(a) ${nome} com e-mail: ${email} e senha ${senha}`,
      );
    } else {
      this.setState({
        form: {
          ...this.state.form,
          error: "Por favor, preencha todos os campos.",
        },
      });
    }

    event.preventDefault();
  }

  trocarSexo(event) {
    this.setState({
      form: { ...this.state.form, sexo: event.target.value },
    });
  }

  dadosForm(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        {this.state.form.error && <p>{this.state.form.error}</p>}
        <form onSubmit={this.cadastrar}>
          <span>Nome do usuário</span>
          <input
            type="text"
            value={this.state.form.nome}
            onChange={(e) =>
              this.setState({
                form: { ...this.state.form, nome: e.target.value },
              })
            }
          />
          <br />

          <span>Email do usuário</span>
          <input
            type="email"
            value={this.state.form.email}
            onChange={(e) =>
              this.setState({
                form: { ...this.state.form, email: e.target.value },
              })
            }
          />
          <br />

          <span>Senha do usuário</span>
          <input
            type="password"
            value={this.state.form.senha}
            onChange={(e) =>
              this.setState({
                form: { ...this.state.form, senha: e.target.value },
              })
            }
          />
          <br />

          <span>Sexo do usuário</span>
          <select
            name="Sexo"
            value={this.state.form.sexo}
            onChange={this.dadosForm.bind(this)}
          >
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
          <br />

          <button type="submit"> Cadastrar! </button>
        </form>
      </div>
    );
  }
}

export default AppFormularioDois;
