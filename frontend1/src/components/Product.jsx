import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../store/context/Context";

export default class Product extends Component {
  
  render(props) {
    const {id, background, title, price, isInCart} = this.props.product;
    console.log(id)
    const { addToCart, closeNavCart } = this.props;
    console.log(isInCart);
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div className="product">
              <Link to={`/details/${id}`} onClick={closeNavCart}>
                <div className="img-div">
                  <img src={background} alt="" />
                </div>
              </Link>
              <div className="details">
                <h3>{title}</h3>
                <p>$ {price}</p>
                <div className="cartBtn">
                  <button
                    onClick={addToCart}
                    className={isInCart ? "disabled" : ""}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    {isInCart ? "Adicionado" : "Adicionar ao carrinho"}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
