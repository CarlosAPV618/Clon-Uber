import * as t from '../types'

export default (state, { type, payload }) => {
    switch (type) {

    case t.DEFINIR_ORIGEN:
        return { 
            ...state,
            origin: payload
        }
    case t.DEFINIR_DESTINO:
        return { 
            ...state,
            destination: payload 
        }
    case t.INFO_VIAJE:
        return { 
            ...state,
            travelTimeInformation: payload 
        }
    case t.BUSQUEDA:
        return {
            ...state,
            busqueda: payload
        }
    case t.RESUTLADOS_LUGARES:
        return {
            ...state,
            places: payload
        }

    default:
        return state
    }
}
