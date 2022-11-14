import React from 'react'
import meta from '../../Assets/meta.svg'
import walletconnect from '../../Assets/walletconnect.svg'
import arrow from '../../Assets/arrow.svg'
import './Modal1.css'


export default function Modal() {

 return (
         <div className='button__modal' >
                <div className='cwallet'>
                    <h1>Connect Wallet</h1>
                    <h2> X </h2>
                </div>

                <div className='mw'>
                    <h1 >Choose your preferred wallet:</h1>
                    <div className='lm'>
                    <img src={meta} alt="meta" />  <h2>Metamask</h2>
                    <img src={arrow} alt="arrow" />
                    </div>
                    <div className='lw'>
                        <img src={walletconnect} alt="walletconnect" /> <h2>WalletConnect</h2>
                        <img src={arrow} alt="arrow" />
                    </div>
                    
                </div>
        </div>
        
   )
 }
