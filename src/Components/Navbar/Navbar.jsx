import React, {useState} from 'react'
import './Navbar.css'
import Bnbn from '../../Assets/Bnbn.png'
import {Link} from 'react-router-dom';
import menu from '../../Assets/menu.png'
import Modal from 'react-modal';
import Modal1 from '../Modal/Modal1';

export default function Navbar() {

   const [click, setClick] = useState(false);

   const handleClick = () => 
	 	setClick(!click);
	 

    const [modalIsOpen, setModalIsOpen] = useState(false);
 

     const handleClickModal = () => {
      setModalIsOpen(!modalIsOpen);
       }


  return (
    <div className='navbar__all'>
        <div>
        <Link to='/'><img className='Bnbn'src={Bnbn}  alt ="bnbn" id="bnbn" /></Link>
        </div>
        <div className="nav-icon" onClick={handleClick}>
            <img src={menu} alt='menu'/>
        </div>
        <div className={click ? 'navbar__options' : 'navbar__optionsactive' }>
            <ul className='nav-link'>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}} to="/" 
                onClick={handleClick}>Home</Link>
                </li>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}}  to="/place-to-stay" 
                onClick={handleClick}>Place to stay</Link>
                </li>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}} to="/#nfts"
                 onClick={handleClick}>NFTs</Link>
                </li>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}}  to="/#community"
                 onClick={handleClick}>Community</Link>
                </li>
            </ul>
        </div>

        <div className='connect' onClick={handleClickModal}>
           <h4>Connect Wallet</h4>
        </div>

            <Modal isOpen={modalIsOpen} className='modal__open'>
                <Modal1 />
            </Modal>
      
    </div>
  )
}
