import axios from 'axios'
import React , { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../actions/actionCart'
import { showTopPopUp } from '../../components/TopPopUp/TopPopUpComp'
import { storage } from '../../index'
import filledCartIcon from './cart-filled-icon.png';
import unFilledCartIcon from './cart-unfilled-icon.png';
import './ProductItemCompStyle.css'


export default function ProductItemComp(props) {

    // console.log(props.product.productName + ' : ' + props.product.material)
    // if a product has QUICK VIEW / HOVER IMAGE then we need to load that GIF using UseEffect and then
    // store it in variable and then show it in img

    const dispatch = useDispatch()

    const cartList = useSelector((state) => state.cartList)

    const { cartItems } = cartList

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isQuickViewON, setIsQuickViewON] = useState(false);
    const [addToCartText, setAddToCartText] = useState('Add to Cart')
    const [imageRef, setImageRef] = useState(null)
    const masterProduct = useRef()



    useEffect(()=> {

        storage
            .ref(props.product.images_web[0])
            .getDownloadURL()
            .then((url) => {
                setImageRef(url)
                console.log('Product Item Comp Rendered : ' + props.product.productName);
            })
        
            
            if(props.isSearchScreen){
                masterProduct.current = props.product;
            }else{
                getMasterProduct()
            }

            async function getMasterProduct(){
                axios.get(`api/product/${props.isSimilarProducts ? props.product.id : props.product._id}`).then((product)=>{
                    masterProduct.current = product.data;
                })
            }

        //https://jsonplaceholder.typicode.com/posts
        // fetch("https://source.unsplash.com/100x100/?nature"
    },[props])



    const shimmerIMGstyle={
        height: '230px',
        width: '230px'
    }

    function setImage(){
        setIsImageLoaded(true);
    }

    function onQuickView(){
        setIsQuickViewON(true)
    }

    function offQuickView(){
        setIsQuickViewON(false)
    }

    const isProductInCart = () => {
        let filteredList = cartItems.filter((value)=>{
            return value.product === (props.isSimilarProducts ? props.product.id : props.product._id)
        })

        if(filteredList !== null && filteredList.length !== 0) {
            return filteredList[0].qty;
        }else{
            return null;
        }

    }

    const cartHandler = () => {
        if(!isProductInCart()){

            if(masterProduct.current.isOutOfStock){
                showTopPopUp('Item out of stock')
            }else{
                setAddToCartText('Item added to Cart')
                showTopPopUp('Item Added to cart')
                setTimeout(() => {
                    setAddToCartText('Remove from cart');
                }, 3000);
                dispatch(addToCart( props.isSimilarProducts ? props.product.id : props.product._id, 1))
            }

        }else{
            setAddToCartText('Item Removed from Cart')
            showTopPopUp('Item Removed from Cart')
            setTimeout(() => {
                setAddToCartText('Add to Cart');
            }, 3000);
            dispatch(removeFromCart( props.isSimilarProducts ? props.product.id : props.product._id))
        }
    }


    const CartFilledIcon = () => {
        return(
            <img src={filledCartIcon} alt=''/>
        )
    }

    const CartUnFilledIcon = () => {
        return(
            <img src={unFilledCartIcon} alt=''/>
        )
    }

    return (
        <>
        {/* <div style={{ margin: '20px' }}> 
            https://source.unsplash.com/100x100/?nature  
            'https://alm.parasoft.com/hubfs/api-testing-1.png'
        */}
            <div className='product-item-card' key={props.isSimilarProducts ? props.product.id : props.product._id}>
                    <Link to={`/product/${ props.isSimilarProducts ? props.product.id : props.product._id}`}>
                        <div className={`product-item-card-img-wrapper  ${isImageLoaded ? '' : 'shimmer shimmer-img-size'}`} style={{border: isImageLoaded ? 'solid rgb(199, 199, 199) 0.1px' : '0'}}>
                            <img loading='lazy' style={{display: isQuickViewON ? 'block' : 'none' }}
                                id={props.product.productId + 1}
                                src={props.product.hoverImage}
                                alt='home_1'
                                onLoad={()=>{setImage()}}
                            />

                            <img loading='lazy' className={`${isImageLoaded ? 'image-visible' : 'image-hidden'}` }
                                id={props.product.productId}
                                style={{display: isQuickViewON ? 'none' : 'block' }}
                                src={imageRef}
                                alt='home_1'
                                onLoad={()=>{setImage()}}
                            />

                            {
                                props.product.quickView ?
                                <div className='quick-view-comp' style={{display: isImageLoaded ? 'flex' : 'none'}} 
                                onMouseEnter={()=>{
                                    onQuickView()
                                }}
                                onMouseOut={()=>{
                                    offQuickView()
                                }}
                                >
                                    QUICK VIEW
                                </div>
                                : null
                            }

                            {
                                props.product.bestSeller ?
                                <div className='best-seller-comp' style={{display: isImageLoaded ? 'block' : 'none'}}>
                                    {props.product.bestSeller}
                                </div>
                                : null
                            }
                        </div>

                    </Link>

                {<div style={{height: isImageLoaded ? '0' : '5px'}} />}

                <div className={`${isImageLoaded ? '' : 'shimmer shimmer-text-size'} product-item-card-title-wrapper`}>
                    <div style={{display: isImageLoaded ? 'block' : 'none'}}>
                        { isImageLoaded? `${props.product.productName}` : '' }
                    </div>
                </div>

                {<div style={{height: isImageLoaded ? '0' : '5px'}} />} 

                <div className={`${isImageLoaded ? '' : 'shimmer shimmer-text-size'} product-item-card-price-wrapper`}>
                    <div style={{display: isImageLoaded ? 'block' : 'none',width:'100%'}} onClick={()=>{cartHandler()}}>
                        { isImageLoaded? 
                            <div className="view-price-add-to-cart-comp title">
                                    <span className="view-price-comp old-text">
                                        Price - &#x20B9;{props.product.price ? props.product.price : props.product.mrpPrice}
                                        <div>
                                            {
                                                !isProductInCart() ? <CartUnFilledIcon /> : <CartFilledIcon />
                                            }
                                            {/* <sub>{isProductInCart()}</sub> */}
                                        </div>
                                    </span>
                                    <span className="add-to-cart-comp new-text">
                                        {addToCartText}
                                    </span>
                            </div> : 
                            '' 
                        }
                    </div>
                </div>

                <div className={`${isImageLoaded ? '' : 'shimmer shimmer-text-size'} product-item-card-price-wrapper-MOB`}>
                    <div style={{display: isImageLoaded ? 'block' : 'none'}}>
                        { isImageLoaded? 
                            <div className="view-price-MOB" onClick={()=>{cartHandler()}}>
                                Price - &#x20B9;{props.product.price ? props.product.price : props.product.mrpPrice}
                                <div>
                                    {
                                        !isProductInCart() ? <CartUnFilledIcon /> : <CartFilledIcon />
                                    }
                                    {/* <sub>2</sub> */}
                                </div>
                            </div>
                            : 
                            '' 
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
