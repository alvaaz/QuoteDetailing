export const initialState = {
    currentSlot: 0,
    enableStep: false,
    complete: false,
    totalAmount: 0,
    cart: [],
    stages: [
        {
            name: 'Tipo de vehículo'
        },
        {
            name: 'Estado Pintura'
        },
        {
            name: 'Tercera'
        },
        {
            name: 'Cuarta'
        }
    ],
    selected: [
        {
            option: null
        },
        {
            option: null
        }
    ]
}