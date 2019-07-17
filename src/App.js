import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Cart from './components/cart';
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Fragment>
    );
  }
}

export default App;
