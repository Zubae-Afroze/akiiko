import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Modal, Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import emailjs from 'emailjs-com';

import ReactImageMagnify from 'react-image-magnify';

import './ProductDetails.css';

const ProductDetails = (props) => {

    const product = props.productInfo.find(p => p.productId === props.match.params.id);

    const [bigImageSrc, setImageSrc] = useState(product.heroImage);

    let [itemQuantity, setItemQuantity] = useState(1);

    function NextModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              {/* <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
              <p>
                Thank you for your Purchase, our team will get in touch with you shortly.
              </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to={`/product/${product.productId}`}><button className='modal-cont-button' onClick={props.onHide}>CONTINUE SHOPPING</button></Link>
            </Modal.Footer>
          </Modal>
        );
    }

    function MyVerticallyCenteredModal(props) {
        const initialFormData = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            address: ''
        };    
        
        const [formData, updateFormData] = useState(initialFormData);
            
        const handleChange = (e) => {
            updateFormData({
                ...formData,
                // Trimming any whitespace
                [e.target.name]: e.target.value.trim()
            });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault()
            //console.log(formData);
            // ... submit to API or something

            let eParams = {
                productId: product.productId,
                productName: product.productName,
                fname: formData.fname,
                lname: formData.lname,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                itemQuantity: itemQuantity
            };
            emailTest(eParams)
        };

        const emailTest = (eParams) => {
        //console.log(eParams)
        emailjs.send('service_0gyrynb', 'template_1sohpy9', eParams, 'user_MWfMIz4lhzaCvONbRdLAM')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                setNextModalShow(true); setModalShow(false);
            }, function(error) {
                console.log('FAILED!', error);
            })
        }

        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              {/* <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title> */}
              <Modal.Title name={product.productName}>
                {product.productName}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col className='modal-wrapper'>
                    <p className='modal-intro-text'>Please fill out your information, to continue with the purchase</p>
                    <form className='modal-form'>
                        <input type='text' placeholder='First Name' name='fname' autoComplete="off" className='modal-input modal-first' onChange={handleChange} required></input>
                        <input type='text' placeholder='Last Name' name='lname' autoComplete="off" className='modal-input modal-last' onChange={handleChange} required></input><br></br>
                        <input type='text' placeholder='Email Address' name='email' autoComplete="off" className='modal-input modal-email' onChange={handleChange} required></input><br></br>
                        <input type='number' placeholder='Phone Number' name='phone' autoComplete="off" className='modal-input modal-phone' onChange={handleChange} required></input><br></br>
                        <textarea type='text' id='madd' placeholder='Address' name='address' autoComplete="off" className='modal-input modal-address' onChange={handleChange} required></textarea><br></br>

                        <div className='modal-prd-det'><span className='target-bold'>Product Material:</span> {product.material}</div>
                        <div className='modal-prd-det'><span className='target-bold'>Product Thickness:</span> {product.thickness}</div>
                        <div name={itemQuantity} className='modal-prd-det'><span className='target-bold'>Item Quantity:</span> {itemQuantity}</div>
                    </form>
                </Col>
                <Col className='modal-img'>
                    <img src={product.heroImage} alt='modal_img' style={{'marginBottom':'20px'}}/>
                    <div>
                    <div className='modal-det-label'>Details</div>
                    <ul className='modal-det-text'>
                    <li><span name={product.productId} className='target-bold'>Item Code: </span> {product.productId}</li>
                    <li><span className='target-bold'>Size:</span> {product.measurement}</li>
                    <li><span className='target-bold'>Material:</span> {product.material}</li>
                    {/* <li>Care Instruction: {product.washingCare}</li> */}
                    </ul>
                </div>

                <span className='modal-price'><span className='target-bold'>Price:</span> &#x20B9;{product.price !== undefined ? product.price * itemQuantity : product.mrpPrice * itemQuantity}</span>
                <button className='modal-check-button' onClick={handleSubmit}>CHECK OUT</button>
                </Col>
            </Row>
            </Modal.Body>
            {/* <Modal.Footer>
              <button className='modal-close-button' onClick={props.onHide}>Close</button>
            </Modal.Footer>  () => {setNextModalShow(true); setModalShow(false);*/}
          </Modal>
        );
      }
      
    const [modalShow, setModalShow] = useState(false);

    const [nextModalShow, setNextModalShow] = useState(false);

    // const [dropMaterial, setDropMaterial] = useState('');

    // const [dropThickness, setDropThickness] = useState('');

    return (
        <Container>
        <div className='product-details-wrapper'>
        <Col sm={12} className='carousel-wrapper product-details-carousel'>
                <Carousel controls={false}>
                {product.images.map((prod, index) => (  <Carousel.Item interval={null} key={index}>
                        <img
                        className="d-block w-100"
                        src={prod}
                        alt="First slide"
                        /> 
                        {/* <Carousel.Caption>
                            <h3 className='carousel-slide-1'>Introducing Akiiko</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>))}
                    </Carousel>
         </Col>
        <Row>
            <Col xs={1} className='alt-img-list'> {/*hi*/}
            <ul>
                {product.images.map((prod, index) => (
                    <li key={index}><img onClick={() => setImageSrc(prod)} src={prod} alt='alt_image' /></li>
                ))}
            </ul>
            </Col>
            <Col xs={5} className='alt-img-hero-container'>
            <div className='alt-img-hero'>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'big_img',
                    src: bigImageSrc,
                    width: 522,
                    height: 522
                },
                largeImage: {
                    src: bigImageSrc,
                    width: 1600,
                    height: 1600
                },
                className: 'test-magnify', 
                enlargedImageContainerClassName	: 'mag-img-cont',
                enlargedImageClassName: 'mag-img',
                imageClassName: 'img-hero-wrap',
                lensStyle: {
                    background: 'hsla(0, 0%, 100%, .3)',
                    border: '1px solid #ccc'
                },
                shouldUsePositiveSpaceLens: true
            }} />
            </div>
            </Col>
            <Col lg={6} className='product-det'> {/* cls name added and xs=6 is changed to lg-6*/}
                <div className='products-details-head'>{product.group}</div>
                <div className='products-details-label'> {product.productName}{product.price !== undefined ? <div className='products-details-price'><span className='strike-price'>&#x20B9; {product.mrpPrice}</span>  <span className='nstrike-price'>&#x20B9;{product.price}</span></div> : <div className='products-details-price'>&#x20B9; {product.mrpPrice}</div>}
            </div>
            <Row className='cart-det'>
            <Col className='material-det'>
                <Dropdown>
                    <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                        <div className='material-div'>MATERIAL:</div> <div className='material-dum'>Cotton Canvas <i className="lni lni-chevron-down"></i></div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item>{product.material}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col className='material-det'>
            <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    <div className='thickness-div'>THICKNESS:</div> <div className='thickness-dum'>9 Ounce <i className="lni lni-chevron-down"></i></div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>{product.thickness}</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
            </Row>

            <Row className='cart-det'>
            <Col className='product-details-color'>
            <Dropdown>
                <Dropdown.Toggle className='product-details-button' variant="default" id="dropdown-basic">
                    <div className='color-div'>Color:</div><div className='color-pick'><i className="lni lni-chevron-down testing"></i></div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>Natural<div className='color-pick'></div></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col className='product-details-quantity'>
                <div className='details-quantity'>
                <div className='quantity-div'>Quantity:</div>
                    <div className='quantity-dum'><span className='quantity-decrease' onClick={() => setItemQuantity(itemQuantity <= 1 ? itemQuantity = 1 : itemQuantity - 1)}>-</span>
                        {itemQuantity}
                    <span className='quantity-increase' onClick={() => setItemQuantity(itemQuantity + 1 )}>+</span></div>
                </div>
                </Col>
                </Row>
                <button className='product-purchase-button' onClick={() => setModalShow(true)}>PURCHASE</button>
                
                <div className='product-details-second-wrapper'>
                <div className='product-description-label '>PRODUCT DESCRIPTION</div>
                <div className='product-description-text'>{product.description}</div>

                <div>
                    <div className='product-details-label '>Details</div>
                    <ul className='product-details-text'>
                    <li className='product-details-texts'><span className='target-bold'>Item Code: </span> {product.productId}</li>
                    <li className='product-details-texts'><span className='target-bold'>Size:</span> {product.measurement}</li>
                    <li className='product-details-texts'><span className='target-bold'>Material:</span> {product.material}</li>
                    {/* <li>Care Instruction: {product.washingCare}</li> */}
                    </ul>
                </div>

                <div>
                    <div className='product-details-label '>Care Instruction</div>
                    <div className='product-details-text'>{product.washingCare}</div>
                </div></div>
                
            </Col>
        
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <NextModal
                show={nextModalShow}
                onHide={() => setNextModalShow(false)}
            />
        </Row>
        
            {/* {product.addOn !== undefined ? 
        <Row className=''> 
            <Col sm={3}>
                <div className='addon-img-container'>
                <img style={{border: "1px solid #36353541"}} src={product.addOn.heroImage} alt='summa' />
                </div>
            </Col>
            <Col sm={5}>
                <div className='addon-container'>
                    
                    <div >Add On</div>
                    <ul className='product-details-text addon-text'>You can also purchase this card holder with {product.productName}
                    <li className='product-details-texts addon-text'><span className='target-bold'>Product Name:</span> {product.addOn.productName}</li>
                    <li className='product-details-texts addon-text' ><span className='target-bold'>Description:</span> {product.addOn.description}</li>
                    {/* <li>Care Instruction: {product.washingCare}</li>
                     <li className='product-details-texts addon-text'><span className='target-bold'>{product.productName}</span> &#x20B9;{product.price} +<span className='target-bold'> {product.addOn.productName} </span>&#x20B9;{product.addOn.mrpPrice} = &#x20B9;{parseInt(product.price) + parseInt(product.addOn.mrpPrice)}</li>
                    </ul>
                

                </div>
            </Col>
            <Col sm={3}>
            <button className='product-purchase-button'>PURCHASE</button>

            </Col>
        </Row>
        : null} */}
        { product.similarProducts !== undefined ?
        <div>
            <div className='similar-products-head'>You may also like</div>
         <Row className='similar-products-wrapper'> 
            {/* Similar Products */}
                {product.similarProducts.map(prod => (
                    <div key={prod.productId} className='similar-products-container'>
                        <Link to={`/product/${prod.productId}`} onClick={() => setImageSrc(prod.lifestyleImage)}>
                            <Col lg={2.4} >
                                <div>
                                    <div className='similar-products-image'><img src={prod.lifestyleImage} alt='img'></img>
                                    {prod.bestSeller !== undefined ? <span className='label-best'>{prod.bestSeller}</span> : null}
                                    {prod.quickView !== undefined ? <span className='label-view'>{prod.quickView}</span> : null}
                                    </div>
                                    <div className='similar-products-title'>{prod.productName}</div>
                                    <div className='similar-products-text'> View Details - &#x20B9;{prod.price !== undefined ? prod.price : prod.mrpPrice}</div>
                                </div>
                            </Col>
                        </Link>
                    </div>
                ))}            
          </Row> </div>: null
          }
        </div>
        </Container>
    )
}

export default ProductDetails
