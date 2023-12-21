import React from "react";
import "./css/index.css"
import Header from "./components/Header";
import Main from "./components/Main";
import ProductList from './components/ProductList';



const products = [
    { id: 1, name: "GTA V", price: 20,img: "./img/GTAV_Official_Cover_Art.jpg"},
    { id: 2, name: "RDR 2", price: 30},
    // Добавьте другие товары по аналогии
];

function App() {
  return (
      <div className="App">

          <Header/>
          <ProductList products={products}/>

          <Main />



      </div>



  )
}

export default App;
