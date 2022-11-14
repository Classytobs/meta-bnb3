import React from 'react'
import stay from '../Data/Dataplaces'
import Rating from '../../Assets/Rating.svg'
import './Placesall.css'

export default function Placesall() {
  return (
    <div className='places__all'>
      {stay.map((pstay, key) => (
        <div className="places__frame">

        <div className="frame" key={key} id={pstay.sn} >

        <div className='frame__img'>
            <img src={ pstay.img} alt={pstay.sn} className='img'/>  
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
