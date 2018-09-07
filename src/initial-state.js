export const initialState = {
    currentSlot: 0,
    selectedCar: null,
    complete: false,
    stages: [
        {
            name: 'Selecciona el tipo de vehículo',
            stage: 1
        },
        {
            name: 'Segunda',
            stage: 2
        },
        {
            name: 'Tercera',
            stage: 3
        },
        {
            name: 'Cuarta',
            stage: 4
        }
    ]
}