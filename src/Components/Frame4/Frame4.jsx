import React from 'react'
import './Frame4.css'
import imagecombo from '../../Assets/image combo.png'


export default function Frame4() {
  return (
    <div className='frame4' id='nfts'>
      <div className='frame4__content'>

        <div className='f4content__1'><h1>Metabnb NFTs</h1></div>

        <div className='f4content__2'><h1>Discover our NFT giftcards collection. Loyal customers get 
            amazing giftcards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services</h1></div>

        <div className='f4content__3'><h1>Learn more</h1></div>

      </div>

      <div className='frame4__img'>
        <div><img className='imagecombo'src={imagecombo}  alt ="imagecombo" /></div>
      </div>
    </div>
  )
}
