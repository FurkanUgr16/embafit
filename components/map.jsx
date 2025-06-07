"use client"
import { useState, useCallback, use } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';



const location = {
    lat: 40.214868214554855,
    lng: 28.921803225050642,
}

export default function Map(){
    const {isLoaded} = useJsApiLoader({
        id:'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_Maps_API_KEY
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map){
        setMap(map)
    },[])

    const onUnmount = useCallback(function callback(map){
        setMap(map)
    },[])

    return isLoaded ? (
       <div className=' w-full h-[600px]'>
         <GoogleMap mapContainerStyle={{width: "100%", height: "100%"}}
         center={location}
         zoom={16}
         onLoad={onLoad}
         onUnmount={onUnmount} >
            
            <MarkerF position={location} />

        </GoogleMap>
       </div>
    ): <p className='text-2xl font-openSans items-center justify-center'>Harita Yükleniyor</p>
}