import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Index";
import Products from "./components/products/Index";
import Login from "./components/modals/Login";
import SignUp from "./components/modals/SignUp";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Products} />
      </Switch>
      <Footer />
      {/* <Products /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
    </>
  );
};

export default App;
