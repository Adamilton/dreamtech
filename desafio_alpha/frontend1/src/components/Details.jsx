import React, { Component } from "react";
import { ProductConsumer } from "../store/context/Context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render(props) {
    return (
      <ProductConsumer>
        {(value) => {
          const { data, addToCart } = value;

          console.log(this.props.match.params.id);

          let results = data.find(
            (item) => item.id === parseInt(this.props.match.params.id)
          );

          return (
            <div className="det">
              <div className="inside-container">
                {/* <h2>Dreams Tech </h2> */}

                <div className="det-center">
                  <div className="det-img">
                    <img src={`/${results.background}`} alt="" />
                  </div>

                  <div className="det-info">
                    <h3>{results.title}</h3>
                    <p>{results.description}</p>
                    <h4>
                      price: <span>${results.price}</span>
                    </h4>

                    <div className="but-options">
                      <Link to="/products">
                        <button className="back-products">
                          Voltar a Dreams Tech
                        </button>
                      </Link>
                      <button
                        className="add-toCart"
                        onClick={() => addToCart(results.id)}
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
