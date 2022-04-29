import React from "react";
import "./App.css"; // css
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Products from "./components/Products";
import Thanks from "./pages/Thanks";
import Header from "./components/Header";
import About from "./components/About";
import Details from "./components/Details";
import Checkout from "./components/Checkout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={SignIn} />
        {/* <Route exact path="/scenery" component={Scenery} /> */}
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/thanks" component={Thanks} />    
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/profile" component={Profile} /> */}        
        <Route exact path="/products" component={Products} />
        <Route path="/checkout" component={Checkout} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
