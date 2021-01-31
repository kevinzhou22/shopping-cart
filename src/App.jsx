import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/reset.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './css/general.css';
import Header from './components/Header';
import ItemPage from './components/ItemPage';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage';
import SuppliesPage from './components/SuppliesPage';

function App() {
  return (
    <Router basename="/shopping-cart">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/supplies" exact>
          <SuppliesPage />
        </Route>
        <Route path="/supplies/:id" exact>
          <ItemPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
