import React from "react";
import { ProductConsumer } from "../store/context/Context";
import { Link } from "react-router-dom";
import { BiTrash } from 'react-icons/bi';

export default function Cart(props) {
  const { cartOpen, closeNavCart, handleCartNav, shipping } = props.value;

  return (
    <ProductConsumer>
      {(value) => {
        const { cart, deleteItem, increaseItem, decreaseItem, total } = value;

        return (
          <ul
            className={
              cartOpen ? "newCartNav cartNav cartItem" : " cartNav cartItem"
            }
          >
            {cart.length === 0 ? (
              <div>
                <span className="inside-btn" onClick={handleCartNav}>
                  X
                </span>
                <div className="empty">O carrinho está vazio no momento</div>
              </div>
            ) : (
              <div className="cartItem">
                <span className="inside-btn" onClick={handleCartNav}>
                  X
                </span>

                {cart.map((product) => {
                  return (
                    <div className="cart-center" key={product.id}>
                      <div className="img-cart">
                        <img src={product.background} alt="" />
                      </div>
                      <div className="item-cart">
                        <p>{product.title}</p>
                      </div>
                      <div className="inc-dec-cart">
                        <button onClick={() => decreaseItem(product.id)}>
                          -
                        </button>
                        {product.count}
                        <button onClick={() => increaseItem(product.id)}>
                          +
                        </button>
                      </div>
                      <div className="price-cart">
                        <p>$ {product.price * product.count}</p>
                      </div>
                      <div
                        className="del-item"
                        onClick={() => deleteItem(product.id)}
                      >
                        <i className="fa fa-trash" aria-hidden="true">
                          <BiTrash />
                        </i>
                      </div>
                    </div>
                  );
                })}

                {/* totals */}
                <div className="extra-info">
                  <h3>
                    <span> Total:</span> $ {total}
                  </h3>

                  <div className="shipping">
                    <h3>
                      <span>Frete: </span>
                      {total > 90 ? "free" : `+ $ ${shipping}`}
                    </h3>
                  </div>

                  <h3>
                    <span> Total: </span>$ {total > 90 ? total : total + shipping}
                  </h3>

                  <div className="payment" onClick={closeNavCart}>
                    <Link to="/checkout">Escolher forma de pagamento</Link>
                  </div>
                </div>
              </div>
            )}
          </ul>
        );
      }}
    </ProductConsumer>
  );
}
