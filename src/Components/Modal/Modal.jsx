import React from 'react'
import meta from '../../Assets/meta.svg'
import walletconnect from '../../Assets/walletconnect.svg'
import arrow from '../../Assets/arrow.svg'
import './Modal.css'


export default function Modal() {
    const handleClick = (e) => {
        setModal(!modal);
      }

 return (
         <div>
                <div>
                    <h1>Connect Wallet</h1>
                    <span> X </span>
                </div>

                <div>
                    <h1 >Choose your preferred wallet:</h1>
                    <div>
                    <img src={meta} alt="meta" />  <span>Metamask</span>
                    <img src={arrow} alt="arrow" />
                    </div>
                    <div>
                        <img src={walletconnect} alt="walletconnect" /> <span >WalletConnect</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                    
                </div>
        </div>
        
   )
 }
