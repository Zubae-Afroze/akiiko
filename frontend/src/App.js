import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './App.css';

import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';

import BagAllProducts from './components/BagAllProducts/BagAllProducts';
import HomeAllProducts from './components/HomeAllProducts/HomeAllProducts';
import AccessoriesAllProducts from './components/AccessoriesAllProducts/AccessoriesAllProducts';
import GiftAllProducts from './components/GiftAllProducts/GiftAllProducts';
import StorageAllProducts from './components/StorageAllProducts/StorageAllProducts';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import AboutUs from './components/AboutUs/AboutUs';
import Careers from './components/Careers/Careers';
import FooterLinks from './components/FooterLinks/FooterLinks'
export default class App extends Component {
  // constructor(props){
  //   super(props);  
  // }

  render() {
    return (
      <Router>
          <ScrollToTop />
          <Header/>
          <Switch>
            <Route path='/' component={HomeScreen} exact/>
            {/* Product Listing */}
            <Route path='/productlist/:group/:subGroup' render={() => (<ProductList />)}/>

            {/* Bags View All */}
            <Route path='/allproducts/productlist/bags' render={() => (<BagAllProducts />)}/>

            {/* Home View All */}
            <Route path='/allproducts/productlist/home' render={() => (<HomeAllProducts/>)}/>

            {/* Gift View All */}
            <Route path='/allproducts/productlist/gift' render={() => (<GiftAllProducts/>)}/>

            {/* Storage View All */}
            <Route path='/allproducts/productlist/storage' render={() => (<StorageAllProducts/>)}/>

            {/* Accessories View All */}
            <Route path='/allproducts/productlist/accessories' render={() => (<AccessoriesAllProducts />)}/>

            {/* All Products */}
            <Route path='/product/:id' render={() => (<ProductDetails/>)}/>

            <Route path='/FooterLinks' render={() => (<FooterLinks/>)} />
            <Route path='/AboutUs/' render={() => (<AboutUs />) } />
            <Route path='/Careers/' render={() => (<Careers />) } />
          </Switch>
          <Footer/>
      </Router>
    )
  }
}
