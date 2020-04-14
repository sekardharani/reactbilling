import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import ProductList from "./components/Productslist";
const App = () => {
  return (
    <div className="App">
      <Counter />
      <hr />
      <ProductList />
    </div>
  );
}

export default App;
