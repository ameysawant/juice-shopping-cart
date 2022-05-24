import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Index";

const App = () => {
  return (
    <>
      <h1 className="heading-lg">heading</h1>
      <h1 className="heading-md">heading</h1>
      <h1 className="heading-sm">heading</h1>
      <button className="btn">button</button>
      <button className="btn btn-black">button</button>
      <button className="btn btn-disabled">button</button>
      <table>
        <tr>
          <th>tesing</th>
          <th>tesing</th>
          <th>tesing</th>
          <th>tesing</th>
        </tr>
        <tr>
          <td>one</td>
          <td>one</td>
          <td>one</td>
          <td>one</td>
        </tr>
        <tr>
          <td>one</td>
          <td>one</td>
          <td>one</td>
          <td>one</td>
        </tr>
        <tr>
          <td>one</td>
          <td>one</td>
          <td>one</td>
          <td>one</td>
        </tr>
        <tr>
          <td>one</td>
          <td>one</td>
          <td>one</td>
          <td>one</td>
        </tr>
        <tr>
          <td>one</td>
          <td>one</td>
          <td>one</td>
          <td>one</td>
        </tr>
      </table>
      <input type="text" className="f-control" />
      <select name="" id="" className="f-control">
        <option value="">select</option>
        <option value="">one</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
};

export default App;
