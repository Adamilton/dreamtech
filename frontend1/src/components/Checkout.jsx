import React from "react";
import { Link } from "react-router-dom";
import "../css/Checkout.css";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      listFromCarrinho: [],
      disabledButton: true,
      email: "",
      cpf: "",
    };
  }

  checkInformation = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
    const { email, cpf } = this.state;
    const emailVerification = this.emailVerification(email);
    const biggerOrEqual = 10;

    // verificando email e o password
    if (cpf.length === biggerOrEqual) {
      this.setState({ disabledButton: false });
    } else this.setState({ disabledButton: true });
  };

  // Na pagina do Matheus Battisti ensinando sobre regex
  emailVerification = (email) => {
    const regexValidation = /\S+@\S+\.\S+/;
    return regexValidation.test(email);
  };

  buttonCheckInfo = () => {
    localStorage.clear;
  }

  componentDidMount() {
    const produtosDoCarrinho = localStorage.getItem("dataCart");
    const produtosFromCarrinho = JSON.parse(produtosDoCarrinho);
    this.setState({
      listFromCarrinho: produtosFromCarrinho,
    });
  }

  render() {
    const { listFromCarrinho, email, cpf, disabledButton, payment } =
      this.state;
    return (
      <div className="main-all">
        <ul>
          {listFromCarrinho.map((results) => (
            <>
              <div className="det-center1">
                <div className="det-img1">
                  <img
                    className="img-det1"
                    src={`/${results.background}`}
                    alt=""
                  />
                </div>

                <div className="det-info1">
                  <h3 className="h3-det">{results.title}</h3>
                  <h4 className="det-span-4">
                    price: <span>${results.price}</span>
                  </h4>
                </div>
              </div>
            </>
          ))}
        </ul>

        <section className="section-payment">
          <div>
            <h2>Pagamento</h2>
            <input
              className="pay"
              name="payment"
              type="radio"
              id="input1"
              value={payment}
              onChange={this.checkInformation}
            />
            <label htmlFor="input1">Débito</label>

            <input
              className="pay"
              name="payment"
              type="radio"
              id="input2"
              value={payment}
              onChange={this.checkInformation}
            />
            <label htmlFor="input2">Crédito</label>

            <input
              className="pay"
              name="payment"
              type="radio"
              id="input3"
              value={payment}
              onChange={this.checkInformation}
            />
            
            <label htmlFor="input3">Pix</label>
          </div>
        </section>
        <section className="dates">
          <h2>Dados Cadastrais</h2>
          <label htmlFor="nomeCompleto">
            Digite seu Nome Completo:
            <input
              className="input-date"
              id="nomeCompleto"
              type="text"
              placeholder="Nome"
              required
              onChange={this.checkInformation}
            />
          </label>
          <label htmlFor="DigiteOEmail">
            Digite seu Email:
            <input
              className="input-date"
              id="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={this.checkInformation}
            />
          </label>
          <label htmlFor="DigiteSeuCPF">
            Digite seu CPF:
            <input
              className="input-date"
              id="cpf"
              value={cpf}
              type="text"
              placeholder="CPF - Apenas números"
              required
              onChange={this.checkInformation}
            />
          </label>

          {/* <label htmlFor="DigiteSeuTelefone">
            Digite um Número de Contato:
            <input
              className="input-date"
              id="DigiteSeuTelefone"
              type="text"
              placeholder="Telefone - Apenas números"
              required
              onChange={this.checkInformation}
            />
          </label>
          <label htmlFor="DigiteO-CEP">
            Digite o CEP do Endereço:
            <input
              className="input-date"
              id="DigiteO-CEP"
              type="text"
              placeholder="CEP - Apenas números"
              required
              onChange={this.checkInformation}
            />
          </label>
          <label htmlFor="endereço">
            Digite seu Endereço:
            <input
              className="input-date"
              id="endereço"
              type="text"
              placeholder="Endereço"
              required
              onChange={this.checkInformation}
            />
          </label> */}
          <Link to="thanks">
            <div className="button-center">
              <button 
                className="button-sales"
                type="button"
                disabled={disabledButton}
                onClick={this.buttonCheckInfo}
              >
                Comprar
              </button>

            </div>
          
        </Link>
        </section>

        
      </div>
    );
  }
}

export default Checkout;
