import React , {useState} from 'react'
import cartIcon from '../../components/Shimmers/assets/1-02-02.png'
import heartIcon from './heart-icon.svg'
import axios from 'axios'
import templateOne from './Templates/templateOne'
import './ProductComponentStyle.css'



        let productElementObj = {
            title: '',
            imgSrc: '',
        }

export default function ProductCardScreen() {

    const [selectedTemplate, setSelectedTemplate] = useState(0)
    const [elementsList, setElementList] = useState([])

    const [cardsElementTemplate, setCardsElementTemplate] = useState('')
    const [titleSubtitleElementTemplate, setTitleSubtitleElementTemplate] = useState('')

    const stringElement = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                *{
                    box-sizing: border-box;
                }
                
                body{
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 3rem;
                }


                .heading{
                    margin-bottom: 0;
                    color: #3e3331;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .content{
                    color: #473f3d;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }

                .product_card_wrapper{
                    border: 1px solid rgb(201, 201, 201);
                    background-color: #f6f1ea;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-width: 400px;
                    margin-bottom: 1rem;
                }

                .product_card_wrapper > p {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                    color: #3e3331;
                }

                .product_card_wrapper button {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                    padding: 0.3rem 1rem 0.3rem 1rem;
                    border: none;
                    color: #f6f1ea;
                    background-color: #977257;
                    letter-spacing: 0.08rem;
                    word-spacing: 0.15rem;
                }
            </style>
        </head>
        <body>
            <div style="width:100%;">
                <h2 class='heading'>New Products Has been Launched</h2>
                <p class='content'>We have launched 6 new products have a look at it</p>
            </div>
            
            ${cardsElementTemplate}
        </body>
        </html>
        `;


    const sendEmail = async () => {
  
        const config = {
            headers: {
            'Content-Type': 'application/json',
            },
        }

        const data = {
            email: 'ImTheNewEmail',
            htmlBody: templateOne(cardsElementTemplate,titleSubtitleElementTemplate),
        }
    
        try {
            
            await axios.post(
                '/api/mail/newslettertest',
                data,
                config
            )

        } catch (error) {
            console.log('**** ERROR **** : ' + error.message )
        }
                    
    }

    const onAddNewElement = () => {
        setElementList([...elementsList,{title: '',imgSrc: '',productLink: ''}])
    }
    
    // console.log('Length: '+elementsList.length)
    return(
        <>
            <button onClick={()=>{
                // console.log(templateOne(cardsElementTemplate,titleSubtitleElementTemplate))
                sendEmail()
            }}>Send Emails</button>

            <TitleAndSubTitleComp setTitleSubtitleElementTemplate={setTitleSubtitleElementTemplate} />
            
            {
                elementsList.map((data,index) => {
                    return(
                        <ElementInputComponent 
                            object={data} 
                            elementsList={elementsList} 
                            setElementList={setElementList} 
                            key={index} 
                            index={index} 
                            setCardsElementTemplate={setCardsElementTemplate}
                        />
                    );
                })
            }
            <button onClick={onAddNewElement}>Add New Element</button>
        </>
    );

}


function TitleAndSubTitleComp(props){

    const [ value , setValue ] = useState({
        title: '',
        subTitle: '',
    })

    const onAddElement = () => {
        // let newList = props.elementsList;
        // newList[props.index] = value;
        let template = `
        <div style="width:100%;">
            <h2 class='heading'>${value.title}</h2>
            <p class='content'>${value.subTitle}</p>
        </div>
        `;

        console.log(value)

        // props.setElementList(newList)
        props.setTitleSubtitleElementTemplate(prevState => `${prevState} ${template}`)
    }

    const onChange = (e) => {
        setValue({...value,[e.target.name]:e.target.value })
    }

    return(
        <div style={{border:'1px solid grey', padding:'15px', margin:'15px'}}>
            <InputComp fieldTitle={'Title'} name={'title'} value={value.title} onChange={onChange} />
            <InputComp fieldTitle={'SubTitle'} name={'subTitle'} value={value.subTitle} onChange={onChange} />
            <button style={{display:'block',marginTop:'10px'}} onClick={onAddElement}>Add Element</button>
        </div>
    )
}

/* <div class='product_card_wrapper'>
                <img src='https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FSS001.jpg?alt=media&token=835c57a1-f00f-4e55-92d0-406d61d110e9' alt='' />
                <p>New Original Sandwich Bag (pack of 3)</p>
                <a href="/product"> 
                    <button>SHOP NOW</button>
                </a>
            </div>

            <div class='product_card_wrapper'>
                <img src='https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FSS003.jpg?alt=media&token=b6894269-c602-4dc0-bfea-d4834a15925d' alt='' />
                <p>New Sandwich Bag (pack of 3)</p>
                <a href="/product"> 
                    <button>SHOP NOW</button>
                </a>
            </div>

            <div class='product_card_wrapper'>
                <img src='https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FSS001.jpg?alt=media&token=835c57a1-f00f-4e55-92d0-406d61d110e9' alt='' />
                <p>New Original Sandwich Bag (pack of 3)</p>
                <a href="/product"> 
                    <button>SHOP NOW</button>
                </a>
            </div>

            <div class='product_card_wrapper'>
                <img src='https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/display_images%2FBags%2FTote%2FSS003.jpg?alt=media&token=b6894269-c602-4dc0-bfea-d4834a15925d' alt='' />
                <p>New Sandwich Bag (pack of 3)</p>
                <a href="/product"> 
                    <button>SHOP NOW</button>
                </a>
            </div> */

function ElementInputComponent(props){
    const [ value , setValue ] = useState({
        title: '',
        imgSrc: '',
        productLink: '',
    })

    const onAddElement = () => {
        let newList = props.elementsList;
        newList[props.index] = value;
        let template = `
        <div class='product_card_wrapper'>
            <img src='${value.imgSrc}' alt=${value.title} />
            <p>${value.title}</p>
            <a href='${value.productLink}'> 
                <button>SHOP NOW</button>
            </a>
        </div>
        `;

        console.log(value)

        props.setElementList(newList)
        props.setCardsElementTemplate(prevState => `${prevState} ${template}`)
    }

    const onChange = (e) => {
        setValue({...value,[e.target.name]:e.target.value })
    }

    return(
        <div style={{border:'1px solid grey', padding:'15px', margin:'15px'}}>
            <InputComp fieldTitle={'Title'} name={'title'} value={value.title} onChange={onChange} />
            <InputComp fieldTitle={'Image Link'} name={'imgSrc'} value={value.imgSrc} onChange={onChange} />
            <InputComp fieldTitle={'Product Link'} name={'productLink'} value={value.productLink} onChange={onChange} />

            {/* <input
                type='text'
                name='title'
                value={value.title}
                onChange={(e) => {
                    setValue({...value,title:e.target.value })
                }}
            />
            <input
                type='text'
                name='imrSrc'
                value={value.imgSrc}
                onChange={(e) => {
                    setValue({...value,imgSrc:e.target.value })
                }}
            />
            <input
                type='text'
                name='productLink'
                value={value.productLink}
                onChange={(e) => {
                    setValue({...value,productLink:e.target.value })
                }}
            /> */}
            <button style={{display:'block',marginTop:'10px'}} onClick={onAddElement}>Add Element</button>
        </div>
    );
}

function InputComp(props){
    return(
        <>
        <p style={{marginBottom:'2px',marginTop:'15px'}}>{props.fieldTitle}</p>
        <input
            type='text'
            name={`${props.name}`}
            value={props.value}
            onChange={(e) => {
                props.onChange(e)
            }}
        />
        </>
    );
}

function ProductCardBackUpComp(){
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}> 

            <ProductComponentCard title={'First Product'} price={'399'} />
            <ProductComponentCard title={'Second Product with more text on it'} price={'399'} bestSeller />
            <ProductComponentCard title={'Third Product'} price={'399'} />
            <ProductComponentCard title={'Fourth Product'} price={'399'} />

            {/* <ProductComponentCard title={'Second Product awy egq asiduyta ewruwegh szdkjfh sefs se'} price={'399'} /> */}


        </div>

        {/* <button onClick={sendEmail}> Send News Letter </button> */}

        </div>
    )
}

function ProductComponentCard(props){


    const ProductCardImage = () => {
        return(
            <div className='product-card-image-comp-wrapper'>
                <img src='/images/blog_images_1/2.jpeg' alt='girl' />
                <img src='/images/blog_images_1/2.jpeg' alt='girl' />
                <img src='/images/blog_images_1/2.jpeg' alt='girl' />
            </div>
        );
    }

    const ProductCardTitle = () => {
        return(
            <div className='product-card-title-wrapper'>
                <p> {props.title} </p>
                <img src='/images/font_images/cart.svg' alt=''  />
            </div>
        );
    }


    const ProductCardPrice = () => {
        return(
            <div className='product-card-price-wrapper'>
                &#x20B9; {props.price}
                <img src={heartIcon} alt='' width="16" height="16" />
            </div>
        )
    }

    const ProductCardBestSeller = () => {
        
        return(
            <div className='product-card-best-seller-comp best-seller-shimmer'>
                Best seller
            </div>
        )
    }



    return (
        <div className='product-card-component-wrapper'>

        <ProductCardImage />

        <ProductCardTitle />

        <ProductCardPrice />

        {
            props.bestSeller && (
                <ProductCardBestSeller />
            )
        }

        </div>
    )
}



function NewsLetterMailTesterComp(){
    return(
        <div>
            
        </div>
    )
}

