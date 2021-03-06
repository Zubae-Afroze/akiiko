import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../actions/actionCart'
import { showTopPopUp } from '../../components/TopPopUp/TopPopUpComp'
import { storage } from '../../index'
// import filledCartIcon from './cart-filled-icon.png'
// import unFilledCartIcon from './cart-unfilled-icon.png'
import filledCartIcon from './assets/1-02-03.png'
import unFilledCartIcon from './assets/1-02-02.png'
import './ProductItemCompStyle.css'

export default function ProductItemComp(props) {
  // console.log(props.product.productName + ' : ' + props.product.material)
  // if a product has QUICK VIEW / HOVER IMAGE then we need to load that GIF using UseEffect and then
  // store it in variable and then show it in img

  const dispatch = useDispatch()

  const cartList = useSelector((state) => state.cartList)

  const { cartItems } = cartList

  const history = useHistory()

  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isQuickViewON, setIsQuickViewON] = useState(false)
  const [addToCartText, setAddToCartText] = useState('Add to Cart')
  const [imageRef, setImageRef] = useState(null)
  const masterProduct = useRef()

  const shimmerIMGstyle = {
    height: '230px',
    width: '230px',
  }

  function setImage() {
    setIsImageLoaded(true)
  }

  function onQuickView() {
    // const imgElement = document.getElementById(`${props.product.productId}`);
    // if(imgElement){
    //   console.log('Got Element')
    // }
    // imgElement.src = "";
    // imgElement.src = props.product.hoverImage;
    // setIsQuickViewON(true)
    document.getElementById(props.product.productId).src =
      props.product.hoverImage
  }

  function offQuickView() {
    // setIsQuickViewON(false)
    document.getElementById(props.product.productId).src = imageRef
  }

  const isProductInCart = () => {
    // console.log('Original Product : '+props.product.link)
    let filteredList = cartItems.filter((value) => {
    // console.log('In Cart Product : '+value.link)
      return value.link === props.product.link
    })

    if (filteredList !== null && filteredList.length !== 0) {
      return filteredList[0].qty
    } else {
      return null
    }
  }

  const cartHandler = () => {
    if (!isProductInCart()) {
      if (masterProduct.current.isOutOfStock) {
        showTopPopUp('Sold out')
      } else {
        setAddToCartText('Item added to Cart')
        showTopPopUp('Item Added to cart')
        setTimeout(() => {
          setAddToCartText('Remove from cart')
        }, 3000)
        dispatch(addToCart(props.product.link, 1))
      }
    } else {
      setAddToCartText('Item Removed from Cart')
      showTopPopUp('Item Removed from Cart')
      setTimeout(() => {
        setAddToCartText('Add to Cart')
      }, 3000)
      dispatch(removeFromCart(props.product.link))
    }
    console.log(isProductInCart())
  }

  useEffect(() => {
    // storage
    //   .ref(props.product.images_web[0])
    //   .getDownloadURL()
    //   .then((url) => {
    //     setImageRef(url)
    //   })
    let isMounted = true;
    async function getMasterProduct() {
      // console.log('Got product ID: '+ props.product.id)
      const product = await axios.get(`/api/product/${props.product.link}`)
      //images_web[0]
      masterProduct.current = product.data
      storage
        .ref(masterProduct.current.displayImage)
        .getDownloadURL()
        .then((url) => {
          if(isMounted){
            setImageRef(url)
          }
        })
    }

    if (props.isSearchScreen) {
      masterProduct.current = props.product
      storage
        .ref(props.product.displayImage)
        .getDownloadURL()
        .then((url) => {
          if(isMounted){
            setImageRef(url)
          }
        })
    } else {
      getMasterProduct()
    }

    // getMasterProduct()

    //https://jsonplaceholder.typicode.com/posts
    // fetch("https://source.unsplash.com/100x100/?nature")
    //     .then(res => {quickViewIMG = res})
    // .then(res => res.json())
    // .then(posts => {
    //     setProductValues({
    //         productName: posts[0].title,
    //         productPrice: posts[0].body,
    //     })
    // })
    return () => {
      isMounted = false;
    }
  }, [props])


  const CartFilledIcon = () => {
    return (
      <img src={filledCartIcon} alt='' width="16" height="16" />
      /* // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
            //     <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
            // </svg> */
    )
  }

  const CartUnFilledIcon = () => {
    return (
      <img src={unFilledCartIcon} alt='' width="16" height="16" />
      // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
      //     <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
      //     <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      // </svg>
    )
  }

  return (
    <>
      {/* <div style={{ margin: '20px' }}> 
            https://source.unsplash.com/100x100/?nature  
            'https://alm.parasoft.com/hubfs/api-testing-1.png'
        */}
      <div
        className='product-item-card'
        key={props.isSimilarProducts ? props.product.id : props.product._id}
      >
        <Link to={`/product/${props.product.link}`}>
          <div
            className={`product-item-card-img-wrapper  ${
              isImageLoaded ? '' : 'shimmer shimmer-img-size'
            }`}
            style={{
              border: isImageLoaded ? 'solid rgb(199, 199, 199) 0.1px' : '0',
            }}
            //   onClick={()=>{
            //     history.push(`/product/${
            //   props.isSimilarProducts ? props.product.id : props.product._id
            // }`)
            //   }}
          >
            {/* <img
              loading='lazy'
              style={{ display: isQuickViewON ? 'block' : 'none' }}
              id={props.product.productId}
              src={props.product.hoverImage}
              alt='home_1'
              onLoad={() => {
                setImage()
              }}
            /> */}

            <img
              loading='lazy'
              className={`${isImageLoaded ? 'image-visible' : 'image-hidden'}`}
              id={props.product.productId}
              // style={{ display: isQuickViewON ? 'none' : 'block' }}
              src={imageRef}
              alt={props.product.productName}
              onLoad={() => {
                setImage()
              }}
            />

            {props.product.quickView ? (
              <div
                className='quick-view-comp'
                style={{ display: isImageLoaded ? 'flex' : 'none' }}
                onMouseEnter={() => {
                  onQuickView()
                }}
                onMouseOut={() => {
                  offQuickView()
                }}
                onClick={() => {
                  onQuickView()
                }}
              >
                QUICK VIEW
              </div>
            ) : null}

            {props.product.bestSeller ? (
              <div
                className='best-seller-comp'
                style={{ display: isImageLoaded ? 'block' : 'none' }}
              >
                {props.product.bestSeller}
              </div>
            ) : null}
          </div>
        </Link>

        {<div style={{ height: isImageLoaded ? '0' : '5px' }} />}

        <div
          className={`${
            isImageLoaded ? '' : 'shimmer shimmer-text-size'
          } product-item-card-title-wrapper`}
          onClick={() => history.push(`/product/${props.product.link}`)}
        >
          <div style={{ display: isImageLoaded ? 'block' : 'none' }}>
            {isImageLoaded ? `${props.product.productName}` : ''}
          </div>
        </div>

        {<div style={{ height: isImageLoaded ? '0' : '5px' }} />}

        <div
          className={`${
            isImageLoaded ? '' : 'shimmer shimmer-text-size'
          } product-item-card-price-wrapper`}
        >
          <div
            style={{ display: isImageLoaded ? 'block' : 'none', width: '100%' }}
            onClick={() => {
              cartHandler()
            }}
          >
            {isImageLoaded ? (
              <div className='view-price-add-to-cart-comp title'>
                <span className='view-price-comp old-text'>
                  Price - &#x20B9;
                  {props.product.price
                    ? props.product.price
                    : props.product.mrpPrice}
                  <div>
                  {!isProductInCart() ? (
                      <CartUnFilledIcon />
                    ) : (
                      <CartFilledIcon />
                    )}
                      {/* <CartUnFilledIcon /> */}
                    {/* <sub>{isProductInCart()}</sub> */}
                  </div>
                </span>
                <span className='add-to-cart-comp new-text'>
                  {addToCartText}
                </span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <div
          className={`${
            isImageLoaded ? '' : 'shimmer shimmer-text-size'
          } product-item-card-price-wrapper-MOB`}
        >
          <div style={{ display: isImageLoaded ? 'block' : 'none' }}>
            {isImageLoaded ? (
              <div
                className='view-price-MOB'
                onClick={() => {
                  cartHandler()
                }}
              >
                Price - &#x20B9;
                {props.product.price
                  ? props.product.price
                  : props.product.mrpPrice}
                <div>
                {!isProductInCart() ? (
                  <CartUnFilledIcon />
                ) : (
                  <CartFilledIcon />
                )}
                    {/* <CartUnFilledIcon /> */}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}
// {!isProductInCart() ? (
//   <CartUnFilledIcon />
// ) : (
//   <CartFilledIcon />
// )}
