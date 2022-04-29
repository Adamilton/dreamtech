import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./store/services/auth";

// Rotas
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Products from "./components/Products";
import Thanks from "./components/Thanks";
import About from "./components/About";
import Details from "./components/Details";
import Checkout from "./components/Checkout";
import NotFound from "./pages/NotFound";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/thanks" component={Thanks} />    
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/profile" component={Profile} /> */}        
        <Route exact path="/products" component={Products} />                
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/checkout" component={() => <h1>Voce esta logado</h1>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      
    </Switch>
  </BrowserRouter>
);

export default Routes;