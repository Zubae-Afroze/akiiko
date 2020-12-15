import React, { Component } from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './App.css';


import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';

import BagWomenProducts from './assets/products/Bags/Women/BagWomenProducts';
import BagToteProducts from './assets/products/Bags/Tote/BagToteProdcuts';
import BagOfficeProducts from './assets/products/Bags/Office/BagOfficeProducts';
import BagTravelProducts from './assets/products/Bags/Travel/BagTravelProducts';

import HomeTablewareProducts from './assets/products/Home/Tableware/HomeTablewareProducts';
import HomeKitchenProducts from './assets/products/Home/Kitchen/HomeKitchenProducts';
import HomeLaundryProducts from './assets/products/Home/Laundry/HomeLaundryProducts';
import HomeGardenProducts from './assets/products/Home/Garden/HomeGardenProducts';

import LifestyleWorkoutProducts from './assets/products/Lifestyle/Workout/LifestyleWorkoutProducts';

import GiftGiftBox from './assets/products/Gift/Giftbox/GiftGiftboxProducts';
import GiftGiftBag from './assets/products/Gift/Giftbag/GiftGiftbagProducts';
import GiftAccessories from './assets/products/Gift/Accessories/GiftAccessoriesProducts';

import StorageOrganiserProduct from './assets/products/Storage/Organiser/StorageOrganiserProducts';
import StorageHomeProduct from './assets/products/Storage/Home/StorageHomeProducts';

import AccessoriesOnTheGoProduct from './assets/products/Accessories/OnTheGo/AcessoriesOnTheGoProducts';
import AccessoriesWalletProduct from './assets/products/Accessories/Wallet/AccessoriesWalletProducts';

import BagAllProducts from './components/BagAllProducts/BagAllProducts';
import HomeAllProducts from './components/HomeAllProducts/HomeAllProducts';
import AccessoriesAllProducts from './components/AccessoriesAllProducts/AccessoriesAllProducts';

import MasterProducts from './assets/products/MasterProducts';
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
      <HashRouter>
          <ScrollToTop />
          <Header/>
          <Switch>
            <Route path='/' component={HomeScreen} exact/>
            {/* Home */}
            <Route path='/bags/women' render={(props) => (<ProductList {...props} 
              productListLabel={'Women'}
              productListText={'A versatile range of  bags that are designed for everyday functionality and effortless style. Minimal, yet classic silhouettes to compliment just about every look, this range of handbags is both purposeful and experimental.'}
              productDetails={BagWomenProducts}/>)}/>

            {/* Tote */}
            <Route path='/bags/tote' render={(props) => (<ProductList {...props} 
              productListLabel={'Tote Bags'}
              productListText={'Rooted in the concept of minimalism & re-usability, the tote is a classic silhouette that represents a bag that can do it all. Comfortable & convenient, the tote bag is an essential.'}
              productDetails={BagToteProducts}/>)}/>

            {/* Office */}
            <Route path='/bags/office' render={(props) => (<ProductList {...props} 
              productListLabel={'Office Bags'}
              productListText={'Refresh your professional aesthetic with minimalist accessories.  Our range of ethical and utilitarian office bags are eco-friendly, timeless & functional. '}
              productDetails={BagOfficeProducts}/>)}/>

            {/* Travel */}
            <Route path='/bags/travel' render={(props) => (<ProductList {...props} 
              productListLabel={'Travel Bags'}
              productListText={'A range of feel-good organic travel bags to carry your every memory. The eco-friendly bags are designed for convenience. Reduce your carbon footprint & enjoy your journey. '}
              productDetails={BagTravelProducts}/>)}/>

            {/* Bags View All */}
            <Route path='/bags/all_products' render={(props) => (<BagAllProducts {...props} 
              womenProductListLabel={'Women'}
              womenProductListText={'A versatile range of  bags that are designed for everyday functionality and effortless style. Minimal, yet classic silhouettes to compliment just about every look, this range of handbags is both purposeful and experimental.'}
              womenProductDetails={BagWomenProducts}

              toteProductListLabel={'Tote Bags'}
              toteProductListText={'Rooted in the concept of minimalism & re-usability, the tote is a classic silhouette that represents a bag that can do it all. Comfortable & convenient, the tote bag is an essential.'}
              toteProductDetails={BagToteProducts}
              
              officeProductListLabel={'Office Bags'}
              officeProductListText={'Refresh your professional aesthetic with minimalist accessories.  Our range of ethical and utilitarian office bags are eco-friendly, timeless & functional.'}
              officeProductDetails={BagOfficeProducts}

              travelProductListLabel={'Travel Bags'}
              travelProductListText={'A range of feel-good organic travel bags to carry your every memory. The eco-friendly bags are designed for convenience. Reduce your carbon footprint & enjoy your journey.'}
              travelProductDetails={BagTravelProducts}
              />)}/>


              {/* Tableware */}
              <Route path='/home/tableware' render={(props) => (<ProductList {...props} 
              productListLabel={'Tableware'}
              productListText={'An elegant range of vegan & natural fabric table accessories that are designed to complement every meal. Our range of eco-friendly accessories make it easy to set up a beautiful table for any occasion.'}
              productDetails={HomeTablewareProducts}/>)}/>

              {/* Kitchen */}
              <Route path='/home/kitchen' render={(props) => (<ProductList {...props} 
              productListLabel={'Kitchen'}
              productListText={'A simple yet inviting collection of natural fabric kitchen accessories that will blend harmoniously with every home’s mood & feel. Multi-purpose & vegan lunch bags, aprons & more.'}
              productDetails={HomeKitchenProducts}/>)}/>

              {/* Laundry */}
              <Route path='/home/laundry' render={(props) => (<ProductList {...props} 
              productListLabel={'Laundry'}
              productListText={'A practical range of natural plant fibre based laundry bags that are designed to be functional yet easy on the eyes.The fresh range of eco-friendly laundry bags are available in various shapes and sizes, additionally with handles, stands or to hang behind your door - making them an essential for every home.'}
              productDetails={HomeLaundryProducts}/>)}/>

              {/* Garden */}
              <Route path='/home/garden' render={(props) => (<ProductList {...props} 
              productListLabel={'Garden'}
              productListText={'Like the saying, ‘Life begins the moment you start a garden’. Our range of plant bags & pot holders are made with fabric that is natural and plant based. The soft, breathable quality of the eco bags makes them great indoors or outdoors. They promise to be great companions for the plants you nurture with love. '}
              productDetails={HomeGardenProducts}/>)}/>

              {/* Home View All */}
              <Route path='/home/all_products' render={(props) => (<HomeAllProducts {...props} 
              tablewareProductListLabel={'Tableware'}
              tablewareProductListText={'An elegant range of vegan & natural fabric table accessories that are designed to complement every meal. Our range of eco-friendly accessories make it easy to set up a beautiful table for any occasion.'}
              tablewareProductDetails={HomeTablewareProducts}

              kitchenProductListLabel={'Kitchen'}
              kitchenProductListText={'A simple yet inviting collection of natural fabric kitchen accessories that will blend harmoniously with every home’s mood & feel. Multi-purpose & vegan lunch bags, aprons & more.'}
              kitchenProductDetails={HomeKitchenProducts}
              
              laundryProductListLabel={'Laundry'}
              laundryProductListText={'A practical range of natural plant fibre based laundry bags that are designed to be functional yet easy on the eyes.The fresh range of eco-friendly laundry bags are available in various shapes and sizes, additionally with handles, stands or to hang behind your door - making them an essential for every home.'}
              laundryProductDetails={HomeLaundryProducts}

              gardenProductListLabel={'Garden'}
              gardenProductListText={'Like the saying, ‘Life begins the moment you start a garden’. Our range of plant bags & pot holders are made with fabric that is natural and plant based. The soft, breathable quality of the eco bags makes them great indoors or outdoors. They promise to be great companions for the plants you nurture with love.'}
              gardenProductDetails={HomeGardenProducts}
              />)}/>

              {/* Workout */}
              <Route path='/lifestyle/workout' render={(props) => (<ProductList {...props} 
              productListLabel={'Workout'}
              productListText={'Every choice made for your well-being is reflected in your choice of accessories. Choose from our range of breathable, vegan & simple gym and yoga bags. Enjoy the compliments as you inhale positivity & exhale your stress.'}
              productDetails={LifestyleWorkoutProducts}/>)}/>

              {/* Gift Box */}
              <Route path='/gift/giftbox' render={(props) => (<ProductList {...props} 
              productListLabel={'Gift Box'}
              productListText={'Inspired by the classic shape of the gift box, our range of eco-friendly gift boxes are unique in their simplicity. Do away with wasteful practises as you gift your loved ones with reusable gift boxes that will carry your gift but are also gifts in themselves.'}
              productDetails={GiftGiftBox}/>)}/>

              {/* Giftbag */}
              <Route path='/gift/giftbag' render={(props) => (<ProductList {...props} 
              productListLabel={'Gift Bag'}
              productListText={'Designed with a zero waste mindset, the eco gift bags are made to be cherished. Gift in them and use them forever. The universal colourway makes the bag customisable and timeless.'}
              productDetails={GiftGiftBag}/>)}/>

              {/* Accessories */}
              <Route path='/gift/accessories' render={(props) => (<ProductList {...props} 
              productListLabel={'Accessories'}
              productListText={'The manner of giving, is often more important than the gift itself. Present your loved ones with thoughtful gifts that are adorned with meaningful and charming accessories to carry your message.'}
              productDetails={GiftAccessories}/>)}/>

              {/* Gift View All */}
              <Route path='/gift/all_products' render={(props) => (<GiftAllProducts {...props} 
              giftboxProductListLabel={'Gift Box'}
              giftboxProductListText={'Inspired by the classic shape of the gift box, our range of eco-friendly gift boxes are unique in their simplicity. Do away with wasteful practises as you gift your loved ones with reusable gift boxes that will carry your gift but are also gifts in themselves.'}
              giftboxProductDetails={GiftGiftBox}

              giftbagProductListLabel={'Gift Bag'}
              giftbagProductListText={'Designed with a zero waste mindset, the eco gift bags are made to be cherished. Gift in them and use them forever. The universal colourway makes the bag customisable and timeless.'}
              giftbagProductDetails={GiftGiftBag}
              
              accessoriesProductListLabel={'Accessories'}
              accessoriesProductListText={'The manner of giving, is often more important than the gift itself. Present your loved ones with thoughtful gifts that are adorned with meaningful and charming accessories to carry your message.'}
              accessoriesProductDetails={GiftAccessories}
              />)}/>

              {/* Organiser */}
              <Route path='/storage/organisers' render={(props) => (<ProductList {...props} 
              productListLabel={'Organiser'}
              productListText={'Decluttering allows for a stress-free, controlled and peaceful mindset. Stock up on our wide range of utilitarian and functional eco organisers to restore order into your life. '}
              productDetails={StorageOrganiserProduct}/>)}/>
              
              {/* Home */}
              <Route path='/storage/home' render={(props) => (<ProductList {...props} 
              productListLabel={'Home'}
              productListText={'A thoughtful range of organisers and storage bags to complement and increase the functionality of your home. Simplistic and warm, the colour tones and minimal design elevate the mood of your personal spaces and allow for easy decluttering.'}
              productDetails={StorageHomeProduct}/>)}/>

              {/* Storage View All */}
              <Route path='/storage/all_products' render={(props) => (<StorageAllProducts {...props} 
              organisersProductListLabel={'Organiser'}
              organisersboxProductListText={'Decluttering allows for a stress-free, controlled and peaceful mindset. Stock up on our wide range of utilitarian and functional eco organisers to restore order into your life. '}
              organisersProductDetails={StorageOrganiserProduct}

              homeProductListLabel={'Home'}
              homeProductListText={'A thoughtful range of organisers and storage bags to complement and increase the functionality of your home. Simplistic and warm, the colour tones and minimal design elevate the mood of your personal spaces and allow for easy decluttering.'}
              homeProductDetails={StorageHomeProduct}
              />)}/>

              {/* On The Go */}
              <Route path='/accessories/onthego' render={(props) => (<ProductList {...props} 
              productListLabel={'On The Go'}
              productListText={'The perfect set of mindful & eco-friendly accessories to keep handy when travelling. Whether you are on the go or planning your next adventure, you will find purpose in our thoughtfully designed travel accessories. '}
              productDetails={AccessoriesOnTheGoProduct}/>)}/>

              {/* Wallet */}
              <Route path='/accessories/wallet' render={(props) => (<ProductList {...props} 
              productListLabel={'On The Go'}
              productListText={'An essential in every sense of the word, the wallet is a classic. We bring to you a collection of timeless, minimal and vegan fabric wallets that serve your purpose and look their part. '}
              productDetails={AccessoriesWalletProduct}/>)}/>

              {/* Accessories View All */}
              <Route path='/accessories/all_products' render={(props) => (<AccessoriesAllProducts {...props} 
              onthegoProductListLabel={'On The Go'}
              onthegoProductListText={'The perfect set of mindful & eco-friendly accessories to keep handy when travelling. Whether you are on the go or planning your next adventure, you will find purpose in our thoughtfully designed travel accessories. '}
              onthegoProductDetails={AccessoriesOnTheGoProduct}

              walletProductListLabel={'Wallet'}
              walletProductListText={'An essential in every sense of the word, the wallet is a classic. We bring to you a collection of timeless, minimal and vegan fabric wallets that serve your purpose and look their part. '}
              walletProductDetails={AccessoriesWalletProduct}
              />)}/>

              {/* All Products */}
              <Route path='/product/:id' render={(props) => (<ProductDetails {...props} 
              productInfo={MasterProducts}/>)}/>

              <Route path='/FooterLinks' render={() => (<FooterLinks/>)} />
              <Route path='/AboutUs/' render={() => (<AboutUs />) } />
              <Route path='/Careers/' render={() => (<Careers />) } />


          </Switch>
          <Footer/>
      </HashRouter>
    )
  }
}
