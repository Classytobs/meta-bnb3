import React from 'react'
import image4 from '../../Assets/image 4.png'
import image6 from '../../Assets/image 6.png'
import image3 from '../../Assets/image 3.png'
import image5 from '../../Assets/image 5.png'
import './Frame1.css'

export default function Frame1() {
  return (
    <>
        <div className='frame1' id='home'>
            <div className='frame1__content'>

                <div className='content__1'><h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1></div>
                
                <div className='content__2'>
                    <h1>we provide you access to luxury and afforable houses in 
                    the metaverse, get a chance to turn your imagination to
                    reality at your comfort zone</h1>
                </div>

                <div className='input__block'><input type='text' id='search' name='search' placeholder='search for location'/>
                <span className='search'>search</span>
                </div>

            </div>


            <div className='img__both'>
                <div className='img__cate1'>
                    <div><img className='image4'src={image4}  alt ="image4" /></div>
                    <div><img className='image6'src={image6}  alt ="image6"  /></div>
                </div>
                <div className='img__cate2'>
                    <div><img className='image3'src={image3}  alt ="image3"  /></div>
                    <div><img className='image5'src={image5}  alt ="image5"  /></div>
                </div>
            </div>

        </div> 
    </>
  )
}
