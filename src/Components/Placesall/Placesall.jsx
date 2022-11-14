import React from 'react'
import stay from '../Data/Dataplaces'
import Rating from '../../Assets/Rating.svg'
import location from '../../Assets/location.svg'
import './Placesall.css'

export default function Placesall() {
  return (
    <div className='places__e'>
      <div className="placeto-nav">
        <div className="text">
          <p>Restaurant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>Fantastic City</p>
          <p>Beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
        </div>
        <div className="location-button">
            <p>Location</p>
            <img src={location} alt="Profile" />
        </div>
      </div>
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
  </div>
  )
}
