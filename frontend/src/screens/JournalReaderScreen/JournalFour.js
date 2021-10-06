import React from 'react'
import { JournalTitleComp, JournalParaTitleComp, JournalParaComp, LinkProduct, TwoImageComp  } from '../../components/Journal/JournalComponents';
import Footer from '../../components/Footer/Footer';
import './JournalThreeStyle.css'


export default function JournalFour() {
    return (
        <>
        <div className='journal_screen_wrapper'>

            <div className='journal_comp_wrapper'>

                <JournalTitleComp 
                    link={'beautiful_display_bread'} 
                    linkTitle={'Beautifully Display Bread'} 
                    journalTitle={'Top 3 ways to beautifully display Bread'} 
                    date={'September 19, 2021'} 
                    readMins={'2 mins read'} 
                />

                <JournalParaComp>
                One should always think beyond the traditional dinner roll. Out of all the frequently used food items, bread always tops the list of being a customary dietary element amongst people.
                </JournalParaComp>

                <JournalParaComp>
                We all love bread, and why not, considering the sheer versatility of it! However, bread may not always be the most eye-catchy element in a dining space. Contrary to popular belief, bread is actually a very creative component that can be adorned on a dining table. 
                </JournalParaComp>

                <JournalParaComp>
                No matter what season, bread is always enjoyed. Taking into account how common it is amongst various households, there are certain ways in which you can make your offerings stand out. 
                </JournalParaComp>

                <JournalParaComp>Here are three tested methods through which you can make a statement with your bread: </JournalParaComp>

                <JournalParaTitleComp>1. Incorporate some bread baskets: </JournalParaTitleComp>
                <JournalParaComp>
                Bread baskets are a modern solution to keep the bread fresh and sound. Order bread baskets that come in <LinkProduct link={'/product/circle-bread-baskets-with-wooden-stand'}>circular</LinkProduct> and <LinkProduct link={'/product/square-bread-baskets-with-wooden-stand'}>square</LinkProduct> shapes, from the <LinkProduct link={'/'}>akiiko</LinkProduct> website. They come with a detachable wooden stand that ensures the mobility of the basket, as seen in the <LinkProduct link={'/product/juco-bread-baskets'}>Juco Bread Baskets</LinkProduct>. Buy <LinkProduct link={'/product/juco-bread-baskets'}>Juco bread baskets</LinkProduct> to ensure the firmness of the bread for a long time. They look distinctive and bring a sense of uniqueness to the table.  
                </JournalParaComp>
                
                <JournalParaTitleComp>2. Add an element of style with a minimalistic table runner: </JournalParaTitleComp>
                <JournalParaComp>
                Bread baskets look even better when coupled with a sustainable table runner that compliments the colour palette. Akiiko’s <LinkProduct link={'/product/juco-tablerunner'}>“Juco table runner”</LinkProduct> can befittingly add an element of elegance to your dining table. This natural fabric designer table runner has been crafted from Juco fabric, which is a blend of jute and cotton. The beauty of it lies in the simplicity with which it has been designed. 
                </JournalParaComp>

                <TwoImageComp 
                    link1={'/product/juco-bread-baskets'}
                    imgSrc1={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT018JC01%2F1.jpg?alt=media&token=29d62c1f-6c49-42ee-b117-0e6fa3f16085'} 
                    img1TTitle={<><strong>Juco Bread Baskets</strong> have a detachable wooden stand</>}

                    link2={'/product/juco-tablerunner'}
                    imgSrc2={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT021JC01%2F1.jpg?alt=media&token=76e69f5a-df7f-4d4f-b244-11a545ca57a8'}
                    img2TTitle={<><strong>Juco Table Runner</strong> compliments a nature inspired table</>}
                />


                <JournalParaTitleComp>3. Consider placemats: </JournalParaTitleComp>
                <JournalParaComp>
                Placemats have been used in every household since time immemorial. They’re a perfect way to arrange plates of various sizes. Akiiko’s set of <LinkProduct link={'/product/juco-placemats'}>‘Juco Placemats’</LinkProduct> can complement any dining space and make it look elegant.
                </JournalParaComp>

                <TwoImageComp 
                    link1={'/product/juco-placemats'}
                    imgSrc1={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT020JC01%2F2.jpg?alt=media&token=cfdc4685-6af3-47a8-be23-5e193cc21e6e'} 
                    img1TTitle={<><strong>Juco Placemats</strong> make it easy to set up a dinner table</>}

                    link2={'/product/juco-placemats'}
                    imgSrc2={'https://firebasestorage.googleapis.com/v0/b/akiiko-auth.appspot.com/o/images_web%2FHome%2FTableware%2FHT020JC01%2Fhero.jpg?alt=media&token=32e30a38-0916-407a-8e6e-ce49a4089a93'}
                    img2TTitle={<><strong>Juco Placemats</strong> make it easy to set up a dinner table</>}
                />

                <JournalParaComp>
                From hearty spreads to <LinkProduct link={'/product/bread-basket'}>bread baskets</LinkProduct>, there are a lot of elements that can help your table look its best for an upcoming event. However, the key to elegance is by incorporating mindful design into your space. Akiiko’s products are rooted in equipping people with mindful designs for themselves as well as their households, you can shop sustainable tableware from our site: www.akiiko.com
                </JournalParaComp>
                
            </div>
            
        </div>
        <Footer/>
        </>
    )
}