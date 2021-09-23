import React , { useState, useRef } from 'react'
import './contactUsStyleScreen.css'

export default function ContactUsScreen() {
    return (
        <div className='contactus-wrapper'>

            {/* <h2>Get in Touch</h2> */}

            <div className='contactus-infoCard-wrapper'>

                <h1>Get in Touch !</h1>

                <ContactUsFormComp />

                <InfoCardComp />

            </div>
            
        </div>
    )
}

const InputField = ({title,formdata}) => {
    return(
        <>
            <div className='input-form-field-wrapper'>

            <p>{title}</p>

            <input
                type='text'
                name={`${title}`}
                onChange={(e) => {
                    formdata.current[e.target.name] = e.target.value;
                }} 
            />
            </div>
        </>
    );
}


function ContactUsFormComp(){

    const formdata = useRef({
        Name: '',
        Email: '',
        Mobile: '',
        Message: '',
    })

    const [buttonText,setbuttontext] = useState('SUBMIT')

    const onFormSubmit = () => {

        const tempObj = {
            Name: '',
            Email: '',
            Mobile: '',
            Message: '',
        };

        setbuttontext('Loading....')

        const result = JSON.stringify(tempObj) === JSON.stringify(formdata.current) 

        // console.log(formdata.current)
        
        if(result){
            //not Allowed 
            setbuttontext('Please Fill')
        }else{
            //snd mail
            setTimeout(() => {
            setbuttontext('Submitted')
        }, 2000);
        }

    }

    return(
        <div className='contactus-form-wrapper'>

            <InputField title={'Name'} formdata={formdata} />

            <InputField title={'Email'} formdata={formdata} />

            <InputField title={'Mobile'} formdata={formdata} />

            <InputField title={'Message'} formdata={formdata} />

            <button onClick={onFormSubmit}>
                {buttonText}
            </button>
        </div>
    );
}


function InfoCardComp(){
    return(
        <div className='info-form-wrapper'>
            <div className='info-form-address-wrapper'>
                <strong>PRECISO FASHION</strong>
                <br />
                <span>Corporate Office</span>
                9.2.2, Cenotoph 2nd Lane, <br />
                Austin Nagar, Teynampet, <br />
                Chennai 600018 <br />
                9858590505 <br />
                India.
            </div>
        </div>
    );
}

