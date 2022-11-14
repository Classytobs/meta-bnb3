import React from 'react'
import Group1 from '../../Assets/Group 1.svg'
import Group2 from '../../Assets/Group 2.svg'
import Frame3 from '../../Assets/Frame 3.svg'
import './Frame2.css'

export default function Frame2() {
  return (
    <div className='frame__2'>
        <div><img className='Group1'src={Group1}  alt ="Group1" /></div>
        <div><img className='Group2'src={Group2}  alt ="Group2" /></div>
        <div><img className='Frame3'src={Frame3}  alt ="Frame3" /></div>
    </div>
  )
}
