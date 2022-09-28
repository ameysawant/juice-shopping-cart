import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Index";
import Products from "./components/products/Index";
import Login from "./components/modals/Login";
import SignUp from "./components/modals/SignUp";

const App = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
      {/* <Products /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
    </>
  );
};

export default App;
