import React, { Component } from "react";
import { getCategories } from "../data/DataSceneryCart";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    navOpen: false,
    cartOpen: false,
    data: [],
    cart: [],
    total: 0,
    shipping: 10,
  };  

  handleNav = () => {
    if (this.state.cartOpen === true) {
      this.setState({
        cartOpen: false,
      });
    }

    this.setState({
      navOpen: !this.state.navOpen,
    });
  };

  handleCartNav = () => {
    if (this.state.navOpen === true) {
      this.setState({
        navOpen: false,
      });
    }

    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  };

  closeNavCart = () => {
    if (this.state.cartOpen == true || this.state.navOpen === true) {
      this.setState({
        navOpen: false,
        cartOpen: false,
      });
    }
  };

  addToCart = (id) => {
    console.log(`item ${id} added to cart`);
    const { data, cart } = this.state;

    let check = this.state.cart.find((item) => item.id === id);

    if (!check) {
      const filterData = data.filter((item) => {
        return item.id === id;
      });

      filterData.forEach((item) => {
        item.isInCart = true;
      });

      this.setState(
        {
          cart: [...this.state.cart, ...filterData],
          cartOpen: true,
        },
        () => {
          this.totalItems();
        }
      );
    } else {
      this.setState({});
    }
  };

  deleteItem = (id) => {
    const { cart } = this.state;

    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
      item.isInCart = false;
    });

    this.setState(
      {
        cart: cart,
      },
      () => {
        this.totalItems();
      }
    );
  };

  increaseItem = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });

    this.setState(
      {
        cart: cart,
      },
      () => {
        this.totalItems();        
      }
    );
  };

  decreaseItem = (id) => {
    const { cart } = this.state;

    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });

    this.setState(
      {
        cart: cart,
      },
      () => {
        this.totalItems();
      }
    );
  };

  totalItems = () => {
    const { cart } = this.state;
    const cartTotal = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({
      total: cartTotal,
    });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("totalCart", JSON.stringify(this.state.total));
  }
  
  async componentDidMount() {
    this.totalItems();
    const data = await getCategories();
    console.log(data)
    this.setState({
      data 
    })

    const dataCart = JSON.parse(localStorage.getItem("dataCart"));

    if (dataCart !== null) {
      this.setState({
        cart: dataCart,
      });
    }

    const totalCart = JSON.parse(localStorage.getItem("totalCart"));

    this.setState({
      total: totalCart,
    });
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleNav: this.handleNav,
          handleCartNav: this.handleCartNav,
          closeNavCart: this.closeNavCart,
          addToCart: this.addToCart,
          deleteItem: this.deleteItem,
          increaseItem: this.increaseItem,
          decreaseItem: this.decreaseItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
