const initialState = {
    arroz: 34
}

export default (state = initialState, evento) => {
    switch(evento.type) {
        case 'incrementar':
            return {...state, arroz: state.arroz + 1}
        case 'decrementar':
        return {...state, arroz: state.arroz - 1}
        default:
            return state
    }
}

// Aunque lo llamemos estanteria esto es un reducer. 