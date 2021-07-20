import React ,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col,  } from 'react-bootstrap';
import { motion } from 'framer-motion'
import { userProfileObject } from './InitialObject';
import { editUserName, editMobileNumber } from '../../actions/actionProfile';
import '../../screens/Chekout/style.css'
import '../../screens/NewProfileScreen/style.css'

const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }


export default function ProfileComp({profileDetails}) {

    const [editMobileFieldON, setEditMobileFieldON] = useState(false);
    const [editNameFieldON, setEditNameFieldON] = useState(false);

    const [nameFieldErrorState , setNameFieldErrorState ] = useState([false,false]); //edit-input-field-error
    const [phoneNumberFieldErrorState , setPhoneNumberFieldErrorState ] = useState(false);

    const dispatch = useDispatch();

    // const profileDetails = useSelector((state) => state.profile.userProfile)

    function handelInputeChange(event){
        if(event.target.name === 'firstName' || event.target.name === 'lastName'){
            userProfileObject[event.target.name] = event.target.value;
        }else{
            userProfileObject.mobile = event.target.value;
        }

        console.log(event.target.name + ' : ' + event.target.value)
    }

    // console.log(profileDetails.name)

    function getName(){
        // let splitedName = 'Sam Surya '.split(" ");
        let splitedName = profileDetails.name.split(" ");

        // console.log('Full Name: '+ profileDetails.name);
        // console.log('Splited Name: '+ splitedName);

        if(splitedName.length === 1){
            // console.log('1 First Name: '+ splitedName[0]);
            return {
                firstName: splitedName[0],
                lastName: ''
            }
        }else if(splitedName.length === 2){
            // console.log('2 First Name: '+ splitedName[0]);
            // console.log('2 Last Name: '+ splitedName[1]);
            return {
                firstName: splitedName[0],
                lastName: splitedName[1]
            }
        }else if(splitedName.length >= 3){
            let [ , ...rest] = splitedName;
            let jointLastName = rest.join(" ");
            // console.log('3 First Name: '+ splitedName[0]);
            // console.log('3 Last Name: '+ jointLastName);
            return {
                firstName: splitedName[0],
                lastName: jointLastName
            }
        }

    }

    function PhoneNumberField(){
        let element;
        let phoneNumber = profileDetails.phoneNumber
        // profileDetails.phoneNumber;
        if(phoneNumber === null){
            element = <h6>Add Phone Number</h6>
        }

        if(editMobileFieldON){
            element = <input 
                type="text" size="12" 
                className={'input-filed-edit-style ' + (phoneNumberFieldErrorState ? 'edit-input-field-error' : '')}
                autofocus placeholder=' Mobile Number'
                name='mobile'
                onChange={handelInputeChange}
            ></input>
        }else if(phoneNumber != null && !editMobileFieldON){
            element = <h6>{profileDetails.phoneNumber}</h6>
        }
        return element;
    }

    
    function phoneNumberEditField(){
        let element;
        let phoneNumber = profileDetails.phoneNumber
        if(phoneNumber === null){
            element = 'Add'
        }

        if(editMobileFieldON && phoneNumber === null){
            element = 'Add'
        }else if(phoneNumber != null && editMobileFieldON){
            element = 'Update'
        }else if(phoneNumber != null && !editMobileFieldON){
            element = 'Edit'
        }
        return element;
    }
    
    function handelNameUpdateEdit(){

        if(!editNameFieldON) {
            console.log('edit Pressed')
            setEditNameFieldON(true) //pressed Edit Name
        }else{
            let isvalid = true;
            let updatedList = [false,false]; 
            if(userProfileObject.firstName === null ||  userProfileObject.firstName.trim() === '' ){
                isvalid = false;
                updatedList[0] = true;
            }
            if(userProfileObject.lastName === null ||  userProfileObject.lastName.trim() === '' ){
                isvalid = false;
                updatedList[1] = true;
            }

            if(isvalid){
                setEditNameFieldON(false) //pressed Edit Name
                let name = userProfileObject.firstName + ' ' + userProfileObject.lastName;
                dispatch(editUserName(name));
                console.log('Diapatch called: ' + name)
            }else{
                setNameFieldErrorState(updatedList)
            }

        }
    }

    function handelPhoneNumberUpdateEdit(){
        if(!editMobileFieldON){
            setEditMobileFieldON(true)
        }else{
            if(userProfileObject.mobile === null ||  userProfileObject.mobile.trim() === '' ){
                setPhoneNumberFieldErrorState(true)
            }else{
                let mobile = userProfileObject.mobile
                // console.log('mobile' + mobile)
                dispatch(editMobileNumber(mobile))
                setEditMobileFieldON(false)
            }
        }
        // if(editMobileFieldON){
        //     let mobile = userProfileObject.mobile
        //     // console.log('called' + editNameFieldON)
        //     dispatch(editMobileNumber(mobile))
        // }
    }


    return (
        <>
            {
                profileDetails && 
                <motion.div variants={containerVariants} initial='hidden' animate='visible'>
                <Container className='pe-lg-5 ps-lg-0 m-0 d-flex justify-content-center'>  
                    <Row>

                        <Col xs={12} className='d-block d-sm-none '>
                            <div style={{height:'30px'}}></div>
                        </Col>
                        <Col xs={12}>
                            <h6 className='f-f-m'>Profile</h6>
                            <div style={{paddingBottom:'30px'}}></div>
                        </Col>

                        <Col xs={12} className='d-block d-sm-block d-md-none f-f-l'>
                            <h6>Name</h6>
                        </Col>
                        <Col md={3}>
                            <h6 className='d-none d-sm-none d-md-block f-f-m'>Name</h6>
                        </Col>
                        <Col xs={8} md={5}>
                            {
                                editNameFieldON 
                                ?   <>
                                        <div className='d-flex justify-content-center d-block d-sm-block d-md-none'>
                                            <span> 
                                                <input 
                                                    type="text" size="8" 
                                                    className={'input-filed-edit-style ' + (nameFieldErrorState[0] ? 'edit-input-field-error' : '')}
                                                    autofocus placeholder=' First Name'
                                                    name='firstName'
                                                    onChange={handelInputeChange}
                                                >
                                                </input> 
                                            </span>
                                            <span> </span>
                                            <span> 
                                                <input 
                                                    type="text" size="8" 
                                                    className={'input-filed-edit-style ' + (nameFieldErrorState[1] ? 'edit-input-field-error' : '')}
                                                    autofocus placeholder=' Last Name'
                                                    name='lastName'
                                                    onChange={handelInputeChange}
                                                    >
                                                </input> 
                                            </span>
                                            
                                        </div>

                                        <div className='d-none d-sm-none d-md-block'>
                                            <div className='d-flex justify-content-center'>
                                                <span> 
                                                    <input 
                                                        type="text" size="10" 
                                                        className={'input-filed-edit-style ' + (nameFieldErrorState[0] ? 'edit-input-field-error' : '')}
                                                        autofocus placeholder=' First Name'
                                                        name='firstName'
                                                        onChange={handelInputeChange}
                                                        style={{marginRight:'2px'}}
                                                    >
                                                    </input> 
                                                </span>
                                                <span> </span>
                                                <span> 
                                                    <input 
                                                        type="text" size="10" 
                                                        className={'input-filed-edit-style ' + (nameFieldErrorState[1] ? 'edit-input-field-error' : '')}
                                                        autofocus placeholder=' Last Name'
                                                        name='lastName'
                                                        onChange={handelInputeChange}
                                                    >
                                                    </input> 
                                                </span>
                                            </div>
                                        </div>

                                    </>
                                :   <><span>{`${getName().firstName}`}</span> <span> </span><span>{`${getName().lastName}`}</span></>
                            }
                        </Col>
                        <Col xs={4}>
                            <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}} onClick={()=> {
                                // setEditNameFieldON(!editNameFieldON)
                                // console.log(userProfileObject.firstName + ' ' + userProfileObject.lastName);
                                handelNameUpdateEdit();
                                }}>
                                {
                                    editNameFieldON 
                                    ?   'Update'
                                    :   'Edit'
                                }
                            </h6>
                        </Col>
                        <Col xs={12}>
                            <hr style={{marginTop:'3px', marginBottom:'25px'}}/>   
                        </Col>


                        <Col xs={12} className='d-block d-sm-block d-md-none f-f-l'>
                            <h6>Mobile</h6>
                        </Col>
                        <Col xs={3} className='d-none d-sm-none d-md-block f-f-m'>
                            <h6 >Mobile</h6>
                        </Col>
                        <Col xs={8} md={5}>
                                <PhoneNumberField/>
                            {/* {
                                profileDetails.phoneNumber === null ?
                                <h6>Enter Phone Number</h6>
                                :
                                editMobileFieldON 
                                ?   <input type="text" size="12" className='input-filed-edit-style' autofocus placeholder=' Mobile Number'></input>
                                :   <h6>+9123456789</h6>
                            } */}
                        </Col>
                        <Col xs={4}>
                            <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}} onClick={()=> handelPhoneNumberUpdateEdit()}>
                                {   
                                    `${phoneNumberEditField()}`
                                }
                            </h6>
                        </Col>
                        <Col xs={12}>
                            <hr style={{marginTop:'3px', marginBottom:'25px'}}/>   
                        </Col>

                        <Col xs={12} className='d-block d-sm-block d-md-none f-f-l'>
                            <h6>Email</h6>
                        </Col>
                        <Col xs={3} className='d-none d-sm-none d-md-block f-f-m'>
                            <h6 >Email</h6>
                        </Col>
                        <Col xs={8} md={5}>
                            <h6>{profileDetails.email}</h6>
                        </Col>
                        <Col xs={4}>
                        <h6 className='tabs f-f-m' style={{textAlign:'end' , paddingRight:'13px'}}>Edit</h6>
                        </Col>
                        <Col xs={12}>
                            <hr style={{marginTop:'3px'}}/>   
                        </Col>
                        <Col xs={12}>
                            <div style={{height:'55px'}}></div>
                        </Col>


                    </Row>
                </Container>
                
                </motion.div>
            }
        </>
    )
}
