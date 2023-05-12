import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Index";
import Products from "./components/products/Index";
import Login from "./components/modals/Login";
import SignUp from "./components/modals/SignUp";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./components/products/productdetail/ProductDetail";
import Modal from "./components/modals/Modal";
import PageNotFound from "./components/others/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Products} />
          <Route path="/detail/:productID" children={<ProductDetail />} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
      <Modal />
      {/* <Products /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
    </>
  );
};

export default App;
