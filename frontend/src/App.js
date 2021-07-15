import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import CartScreen from './screens/CartScreen/CartScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen/PaymentScreen'
import OrderScreen from './screens/OrderScreen/OrderScreen'
import OrderSummaryScreen from './screens/OrderSummaryScreen/OrderSummaryScreen'
import Checkout from './screens/Chekout/Checkout'
import NewProfileScreen from './screens/NewProfileScreen/NewProfileScreen'

import ProductList from './components/ProductList/ProductList'
import ProductDetails from './components/ProductDetails/ProductDetails'

import BagAllProducts from './components/BagAllProducts/BagAllProducts'
import HomeAllProducts from './components/HomeAllProducts/HomeAllProducts'
import AccessoriesAllProducts from './components/AccessoriesAllProducts/AccessoriesAllProducts'
import GiftAllProducts from './components/GiftAllProducts/GiftAllProducts'
import StorageAllProducts from './components/StorageAllProducts/StorageAllProducts'

import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import AboutUs from './components/AboutUs/AboutUs'
import Careers from './components/Careers/Careers'
import FooterLinks from './components/FooterLinks/FooterLinks'
import Terms from './components/Terms/Terms'
import RefundPolicy from './components/RefundPolicy/RefundPolicy'
import PrivacyStatement from './components/PrivacyStatement/PrivacyStatement'
import LifestyleAllProducts from './components/LifestyleAllProducts/LifestyleAllProducts'
export default class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route
            path='/orders/:orderId'
            render={() => <OrderSummaryScreen />}
          />

          <Route path='/login' render={() => <LoginScreen />} />

          <Route path='/shipping' render={() => <ShippingScreen />} />

          <Route path='/checkout' render={() => <Checkout />} />

          <Route path='/newprofile' render={() => <NewProfileScreen />} />

          <Route path='/payment' render={() => <PaymentScreen />} />

          <Route path='/placeorder' render={() => <OrderScreen />} />

          <Route path='/register' render={() => <RegisterScreen />} />

          <Route path='/profile' render={() => <ProfileScreen />} />

          <Route path='/cart/:id?' render={() => <CartScreen />} />
          {/* Product Listing */}
          <Route
            path='/productlist/:group/:subGroup'
            render={() => <ProductList />}
          />

          {/* Bags View All */}
          <Route
            path='/allproducts/productlist/bags'
            render={() => <BagAllProducts />}
          />

          {/* Home View All */}
          <Route
            path='/allproducts/productlist/home'
            render={() => <HomeAllProducts />}
          />

          {/* Gift View All */}
          <Route
            path='/allproducts/productlist/gift'
            render={() => <GiftAllProducts />}
          />

          {/* Lifestyle View All */}
          <Route
            path='/allproducts/productlist/lifestyle'
            render={() => <LifestyleAllProducts />}
          />

          {/* Storage View All */}
          <Route
            path='/allproducts/productlist/storage'
            render={() => <StorageAllProducts />}
          />

          {/* Accessories View All */}
          <Route
            path='/allproducts/productlist/accessories'
            render={() => <AccessoriesAllProducts />}
          />

          {/* All Products */}
          <Route path='/product/:id' render={() => <ProductDetails />} />

          <Route path='/FooterLinks' render={() => <FooterLinks />} />
          <Route path='/AboutUs/' render={() => <AboutUs />} />
          <Route path='/Careers/' render={() => <Careers />} />
          <Route path='/TermsofService' render={() => <Terms />} />
          <Route path='/Refund' render={() => <RefundPolicy />} />
          <Route path='/PrivacyStatement' render={() => <PrivacyStatement />} />

          <Route path='/' component={HomeScreen} exact />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
