import React from 'react'
import places from '../Data/Data'
import './Places.css'
import Rating from '../../Assets/Rating.svg'

export default function Places( ) {
  return (
    <div className='places__all'>
      {places.map((place, key) => (
        <div className="places__frame">

        <div className="frame" key={key} id={place.id} >

        <div className='frame__img'>
            <img src={ place.image} alt={place.id} className='img'/>  
        </div>

        <div className='frame__content'>
        < div className='f1__content'>
            <span >Desert king</span>
            <span className='thick'>1MBT per night</span>
        </div>
        
        <div className='f2__content'>
          <span >2345km away</span>
          <span >available for 2weeks stay</span>
        </div>
        </div>
       
        <div className='star__rating'>
          <img src={Rating} alt="stars" /> 
          </div>
        </div>

        </div>
        
      ))}

          
       
    

    </div>
   
  )
}

