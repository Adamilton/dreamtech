import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../images/brain.svg";
import apiClients from "../store/services/apiClients";
import { Form, Container } from "../pages/styles/SignIn/styles";
import '../css/Login.css'

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };
  

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        let config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": true,
          },
          
          withCredentials: true,
        };

        const response = await apiClients.post(
          "/login",
          { email, password },
          config
        );
        
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T",
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            className="email-login"
            type="email"
            placeholder="Endereço de e-mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            className="password-login"
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Link to='/products'>
            <button className="btn-login2" type="submit">
              Entrar
            </button>
          </Link>
          

          <hr />
          <Link to="/signup">Criar conta</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
