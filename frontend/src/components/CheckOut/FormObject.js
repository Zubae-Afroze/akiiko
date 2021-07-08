
const shippingObject = {
    firstname: '',
    lastname: '',
    adress: '',
    aptFloorSuit: '',
    city: '',
    state: '',
    zipCode: ''
}

const paymentObject = {
    cardNumber: '',
    isCheckMeOut: '',
    monthYearCVC: '',
    netbankingUPI: '',
    isCOD: '',
}

const toastObject = {
    show: false,
    title: 'Invalid',
    message: 'Kindly Fill The Form',
    isSuccess: false,
}

export { shippingObject, paymentObject, toastObject }