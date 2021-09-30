import React, { useReducer } from 'react';
import * as t from '../types'
import dataContext from './dataContext'
import dataReducer from './dataReducer'
import { useNavigation } from '@react-navigation/native';

const DataState = props => {

    const initialState = {
        nav: useNavigation(),
        busqueda: '',
        places: [],
        destination : null,
        origin: null,
        travelTimeInformation: null,
    }

    const [state, dispatch] = useReducer(dataReducer, initialState)

    const setOrigin =  (payload) => {
        dispatch({
            type: t.DEFINIR_ORIGEN,
            payload
        })
    }
    const setDestination =  (payload) => {
        dispatch({
            type: t.DEFINIR_DESTINO,
            payload
        })
    }
    const setTravelTimeInformation =  (payload) => {
        dispatch({
            type: t.INFO_VIAJE,
            payload
        })
    }
    const setBusqueda =  (payload) => {
        dispatch({
            type: t.BUSQUEDA,
            payload
        })
    }
    const setPlaces =  (payload) => {
        dispatch({
            type: t.RESUTLADOS_LUGARES,
            payload
        })
    }

    return ( 
        <dataContext.Provider
            value={{
                ...state,
                setOrigin,
                setDestination,
                setTravelTimeInformation,
                setBusqueda,
                setPlaces
            }}
        >
            {props.children}
        </dataContext.Provider>
     );
}
 
export default DataState;