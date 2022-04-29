// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/svg_logo.svg";
// import ShoppingCart from "../images/shopping-cart.png";

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="content-header">
//         <nav className="nav-title">
//           <img src={Logo} alt="Logo" />
//           <ul className="nav">
//             <Link to="/">
//               <li className="customized">Home</li>
//             </Link>
//             <Link to="/scenery">
//               <li className="customized">Dreams Tech</li>
//             </Link>
//             <li>Sobre a Empresa</li>
//             <li>Contatos</li>
//           </ul>
//           <div className="sign-up">
//             <Link to="/login">
//               <button className="button-sign-up  btn-login" type="button">
//                 Entrar
//               </button>
//             </Link>
//             <Link to="/signup">
//               <button className="button-sign-up btn-sign-up" type="button">
//                 Criar Conta
//               </button>
//             </Link>
//           </div>
//           <div className="shopping-cart">
//             <Link to="/shoppingcart">
//               <button className="btn-shopping-cart" type="button">
//                 <img src={ ShoppingCart } alt="Carrinho de compra" />
//               </button>
//             </Link>
//           </div>
//         </nav>
//       </header>
//     );
//   }
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../store/context/Context";
import Cart from "./Cart";
import logo from "../images/brain.svg";

export default function Header() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          handleNav,
          navOpen,
          cartOpen,
          handleCartNav,
          closeNavCart,
          cart,
        } = value;

        return (
          <div className="container sticky">
            <nav className="sticky">
              <div className="logo-btn">
                <Link to="/" onClick={closeNavCart}>
                  <img src={logo} alt="" />{" "}
                  <span className="dream"> Dream </span> Tech
                </Link>

                <div className="cart hide" onClick={handleCartNav}>
                  {" "}
                  <i className="fas fa-shopping-cart"></i>
                  <span>{cart.length}</span>
                </div>

                <div className="btn" onClick={handleNav}>
                  <i className="fas fa-bars"></i>
                </div>
              </div>

              <div className="dra">
                <div className="drawers">
                  <ul
                    className={navOpen ? "newLinks links" : " links"}
                    onClick={closeNavCart}
                  >
                    <li>
                      <Link to="/">Principal</Link>
                    </li>
                    <li>
                      <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                      <Link to="/products">Dreams Tech</Link>
                    </li>
                    <div className="sign-up">
                      {" "}
                      <Link to="/login">
                        {" "}
                        <button
                          className="button-sign-up  btn-login"
                          type="button"
                        >
                          Entrar{" "}
                        </button>{" "}
                      </Link>{" "}
                      <Link to="/signup">
                        {" "}
                        <button
                          className="button-sign-up btn-sign-up"
                          type="button"
                        >
                          Criar Conta{" "}
                        </button>{" "}
                      </Link>{" "}
                    </div>
                    {/* <li><Link to="/" onClick={handleCartNav} >Cart <i className="fas fa-shopping-cart cart"><span >0</span></i></Link></li> */}
                  </ul>

                  <Cart value={value} />
                </div>
                <span className="carta" onClick={handleCartNav}>
                  Cart{" "}
                  <i className="fas fa-shopping-cart cart">
                    <span>{cart.length}</span>
                  </i>
                </span>
              </div>
            </nav>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
