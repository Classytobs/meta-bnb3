import React from 'react'
import './Footer.css'
import Bnb from '../../Assets/Bnb.svg'
import Bnbb from '../../Assets/Bnbb.svg'
import facebook from '../../Assets/facebook.svg'
import instagram from '../../Assets/instagram.svg'
import twitter from '../../Assets/twitter.svg'



export default function Footer() {
  return (
        <div className='footer__all'>
            <div className='footer__logo'>
                <div className='bnb1'>
                    <a href='#home'><img className='bnb'src={Bnb}  alt ="bnb" id="bnb" /></a>
                </div>

                <div className='social__media'>
                    <div><img className='facebook'src={facebook}  alt ="facebook" id="facebook" /></div>
                    <div><img className='instagram'src={instagram}  alt ="instagram" id="instagram" /></div>
                    <div><img className='twitter'src={twitter}  alt ="twitter" id="twitter" /></div>
                </div>

                <div>
                    <img className='Bnbb'src={Bnbb}  alt ="bnbb" id="bnbb" />
                </div>

            </div>

            <div className='footer__content'>
                <div className='community'>
                    <div className='communityh1'>
                        <h1> Community </h1>
                    </div>
                    <div className='communityh2'>
                        <h2>NFT</h2>
                        <h2>Tokens</h2>
                        <h2>Landlords</h2>
                        <h2>Discord</h2>
                    </div>
                </div>
                <div className='places'>
                <div className='placesh1'>
                        <h1> Places </h1>
                    </div>
                    <div className='placesh2'>
                        <h2>Castle</h2>
                        <h2>Farms</h2>
                        <h2>Beach</h2>
                        <h2>Learn more</h2>
                    </div>
                </div>
                <div className='aboutUs'>
                <div className='aboutUsh1'>
                        <h1> About Us </h1>
                    </div>
                    <div className='aboutUsh2'>
                        <h2>NFT</h2>
                        <h2>Tokens</h2>
                        <h2>Landlords</h2>
                        <h2>Discord</h2>
                    </div> 
                </div>
        </div>
     </div>
       
  )
}
