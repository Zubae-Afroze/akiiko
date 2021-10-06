import React from 'react'
import { JournalTitleComp, JournalParaTitleComp, JournalParaComp, LinkProduct, TwoImageComp  } from '../../components/Journal/JournalComponents';
import Footer from '../../components/Footer/Footer';
import './JournalThreeStyle.css'


export default function JournalThree() {
    return (
        <>
        <div className='journal_screen_wrapper'>

            <div className='journal_comp_wrapper'>

                <JournalTitleComp 
                    link={'minimalist_dining_table'} 
                    linkTitle={'minimalist dining table'} 
                    journalTitle={'5 essentials for your minimalist dining table'} 
                    date={'September 19, 2021'} 
                    readMins={'2 mins read'} 
                />

                <JournalParaComp>
                A dining table serves more purposes than just being a place to eat. It enables us to interact with our friends and loved ones, store the gastronomical essentials needed every day and can also be used as office space for numerous occasions. To make this multifunctional dining table organised, one has to resort to a minimalist way of dressing and design. Hence, here are five essential elements that you should incorporate for your minimalist dining table: 
                </JournalParaComp>

                <JournalParaTitleComp>1. Bread baskets: </JournalParaTitleComp>
                <JournalParaComp>
                Bread baskets are godly organisers that enable you to store bread and chapatis aesthetically on the dining table. Bread baskets are usually conceptualised with the idea of storing bread, but they can store all kinds of dry items that one deems fit. If you’re looking for durable baskets crafted out of eco-friendly fabric, you should go for <LinkProduct link={'/product/herra-breadbasket'}>Herra Bread Baskets</LinkProduct> by Akiiko. 
                </JournalParaComp>

                <JournalParaTitleComp>2. Detachable storage items: </JournalParaTitleComp>
                <JournalParaComp>
                One can’t underestimate the importance of detachable storage items. They’re mobile, efficient and exactly what a table needs. Akiiko has introduced  <LinkProduct link={'/product/square-bread-baskets-with-wooden-stand'}>square bread baskets</LinkProduct> to make storage seamless. They come with a detachable wooden stand and enable your food to stay fresh for long! 
                </JournalParaComp>

                <TwoImageComp 
                    link1={'/product/herra-breadbasket'}
                    imgSrc1={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT003%2Fhero.jpg?alt=media&token=ce0f783d-758c-49d7-acf1-d665016e9670'} 
                    img1TTitle={<>The <strong>Herra Bread Baskets</strong> have a beautiful natural texture</>}

                    link2={'/product/square-bread-baskets-with-wooden-stand'}
                    imgSrc2={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT017%2F5.jpg?alt=media&token=ea82749f-a8ab-4b5e-bca7-30d17f6389f7'}
                    img2TTitle={<>The <strong>Square Bread Baskets</strong> come with a detachable wooden stand</>}
                />


                <JournalParaTitleComp>3. Coasters: </JournalParaTitleComp>
                <JournalParaComp>
                No functional dining-ware is ever complete without coasters. Tiny details can go a long way in making or breaking the sheer elegance of your dining table, and coasters constitute the little things. Avoid unsightly water rings and marks on your table with Akiiko’s <LinkProduct link={'/product/circle-stripe-coasters'}>“circle stripe coasters”</LinkProduct> which come in a set of 12. They’re designed in a very minimalist fashion to suit the colour tone of all kinds of dining tables. 
                </JournalParaComp>

                <JournalParaTitleComp>4. Placemats: </JournalParaTitleComp>
                <JournalParaComp>
                Placemats can jazz up the overall appeal of your dining table. Using minimally coloured placemats can allow your space to have a decluttered look. If you want to build an ethereal table, consider incorporating <LinkProduct link={'/product/biskk-placemats'}>Biskk placemats</LinkProduct> from Akiiko into your tableware. They are bound to add a natural raw texture and clean character to your space! 
                </JournalParaComp>

                <TwoImageComp 
                    link1={'/product/circle-bread-baskets-with-wooden-stand'}
                    imgSrc1={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT015%2F1.jpg?alt=media&token=19e47016-8f79-483a-bda7-fbdf33cf93bc'} 
                    img1TTitle={<>The <strong>Circle Stripe Coasters</strong> compliment every glass.</>}

                    link2={'/product/biskk-placemats'}
                    imgSrc2={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT009%2Fhero.jpg?alt=media&token=27f96538-bbb8-4132-b659-28b10449060c'}
                    img2TTitle={<>The <strong>Circle Stripe Coasters</strong> compliment every glass.</>}
                />

                <JournalParaTitleComp>5. Table runner: </JournalParaTitleComp>
                <JournalParaComp>
                A neutral coloured table runner can add a touch of elegance and tradition to your dining table. Akiiko’s <LinkProduct link={'/product/juco-tablerunner'}>“Juco Table runner”</LinkProduct> is designed with a Jute Cotton blend fabric, it provides a beautifully textured base for a nature-inspired table. It efficiently protects your table from spills and damage. 
                </JournalParaComp>
                <JournalParaComp>
                If you’re looking for tableware that has uncompromising functionality and aesthetics, you should head to <LinkProduct link={'/'}>Akiiko’s </LinkProduct> website. It’s a haven for minimalists who wish to incorporate simple elements into their lifestyle.
                </JournalParaComp>

                <TwoImageComp 
                    link1={'/product/juco-tablerunner'}
                    imgSrc1={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT021JC01%2F1.jpg?alt=media&token=76e69f5a-df7f-4d4f-b244-11a545ca57a8'} 
                    img1TTitle={<><strong>Juco Table Runner</strong> protects your tables.</>}

                    link2={'/product/juco-tablerunner'}
                    imgSrc2={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT021JC01%2F4.jpg?alt=media&token=36ea8fb0-5fcc-4675-92fd-0387fa800e1d'}
                    img2TTitle={<>Juco Dining Set: packaged to perfection.</>}
                />
                
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

// function JournalTitleComp(){
//     return(
//         <div className='journal_title_comp_wrapper'>

//             <div className='journal-link'>
//                 <Link to='/journal'>Journal </Link>
//                 <Link to='/journal/japanese_aesthetic_sensibilities'>
//                 / Japanese Aesthetic Sensibilities
//                 </Link>
//             </div>


//             <div className='journal_title'>
//                 <div> 5 essentials for your minimalist dining table </div>
//             </div>

//             <div className='journal_author_wrap'>
//                 <img src='/favicon.svg' alt='author_image' />
//                 <span className='journal_author_attr'>Akiiko</span>
//                 <span className='journal_author_attr'>September 19, 2021</span>
//                 <span className='journal_author_attr'>2 mins read</span>
//             </div>

//         </div>
//     )
// }

// function LinkProduct(props){
//     //'/product/circle-bread-baskets-with-wooden-stand'
//     return(
//         <Link
//             to={props.link}
//             target='_blank'
//             >
//             <span>
//                 <em>
//                 <u>{props.children}</u>
//                 </em>
//             </span>
//         </Link>
//     );
// }

// function JournalParaTitleComp(props){
//     return(
//         <div>
//             <h4>{props.children}</h4>
//         </div>
//     );
// }

// function JournalParaComp(props){
//     return(
//         <div>
//             <p>{props.children}</p>
//         </div>
//     )
// }


// function OneImageComp(props){
//     return(
//         <div className='one_image_comp_wrapper'>
//             <Link to='/'>
//                 <img src={props.imgSrc} alt='img' />
//             </Link>
//         </div>
//     );
// }

// function TwoImageComp(props){
//     return(
//         <div className='two_image_comp_wrapper'>
//             <Link to='/'>
//                 <img src={props.imgSrc1} alt='img' />
//                 <p>{props.img1TTitle}</p>
//             </Link>
//             <Link to='/'>
//                 <img src={props.imgSrc2} alt='img' />
//                 <p>{props.img2TTitle}</p>
//             </Link>
//         </div>
//     );
// }