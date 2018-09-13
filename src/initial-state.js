export const initialState = {
    currentSlot: 0,
    enableStep: false,
    complete: false,
    stages: [
        {
            name: 'Selecciona el tipo de vehículo'
        },
        {
            name: 'Segunda'
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