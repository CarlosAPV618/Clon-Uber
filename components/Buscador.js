import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import dataContext from '../context/dataContext'

import { Searchbar } from 'react-native-paper'
import tw from 'tailwind-react-native-classnames'
import Resultados from './Resultados'

const Buscador = () => {

    const {
        busqueda,
        setBusqueda,
        setPlaces
    } = useContext(dataContext)

    useEffect( async () => {
        if (busqueda !== ''){

            try {
                const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${busqueda}.json`,
                    params: {
                        'access_token': 'pk.eyJ1IjoiY2hhcmxlczYxOCIsImEiOiJja3M1aWZ2ZjkxaWtrMnBvNHlpZHlkZXFoIn0.ykOPrIym8V1mLulahyOPmw',
                        // 'autocomplete': true,
                        'country':'mx',
                        'limit': 4,
                        'language': 'es'
                    }
                })
        
                const {data} = await instance.get()
                
                setPlaces(data.features)
                
            } catch (error) {
                console.log(error)
                console.log('Error de conexion')
            }
        }
        else setPlaces([])
    }, [busqueda])

    return (
        <>
            <Searchbar
                placeholder="Selecciona un punto de inicio"
                onChangeText={txt => setBusqueda(txt)}
                value={busqueda}
            />
            
            <Resultados />

        </>
    )
}

export default Buscador
